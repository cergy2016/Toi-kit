#!/usr/bin/env python3
"""Builds app-ready content from the compact source files in content-src/.
Correct answer is written first in the source; positions are shuffled here
with a balanced, seeded sequence so A/B/C/D are used equally."""
import json, random, sys, os, wave, subprocess, re
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC=os.path.join(ROOT,'content-src'); OUT=os.path.join(ROOT,'src','content'); AUD=os.path.join(ROOT,'public','audio')
KEYS='ABCD'
DIFF={'E':'Elementary (500)','I':'Intermediate (750)','A':'Advanced (900)'}

def targets(n_items, n_opts, seed):
    rnd=random.Random(seed); seq=[]
    while len(seq)<n_items:
        b=list(range(n_opts)); rnd.shuffle(b); seq+=b
    return seq[:n_items]

def place(correct, wrong, t, rnd):
    wrong=list(wrong); rnd.shuffle(wrong)
    opts=wrong[:t]+[correct]+wrong[t:]
    return opts

def read(name):
    rows=[]
    for i,l in enumerate(open(os.path.join(SRC,name),encoding='utf-8')):
        l=l.rstrip('\n')
        if l.strip(): rows.append((i+1,l.split('|')))
    return rows

def build_p5(existing_texts):
    out=[]; seen=set(existing_texts); errs=[]
    rows=[]
    for f in ['p5_a.txt','p5_b.txt']+[x for x in ['p5_c.txt','p5_d.txt'] if os.path.exists(os.path.join(SRC,x))]:
        for ln,c in read(f): rows.append((f,ln,c))
    tg=targets(len(rows),4,5); rnd=random.Random(51)
    for k,(f,ln,c) in enumerate(rows):
        if len(c)!=8: errs.append(f'{f}:{ln} fields={len(c)}'); continue
        cat,d,q,ok,w1,w2,w3,ex=[x.strip() for x in c]
        if '_______' not in q: errs.append(f'{f}:{ln} no blank'); continue
        opts=[ok,w1,w2,w3]
        if len({o.lower() for o in opts})!=4: errs.append(f'{f}:{ln} dup options'); continue
        if q in seen: errs.append(f'{f}:{ln} duplicate sentence'); continue
        seen.add(q)
        o=place(ok,[w1,w2,w3],tg[k],rnd)
        out.append({'id':f'p5x-{len(out)+1:03d}','part':5,'category':cat,'difficulty':DIFF[d],'questionText':q,
          'options':[{'key':KEYS[i],'text':t} for i,t in enumerate(o)],'correctAnswer':KEYS[tg[k]],'explanation':ex})
    return out,errs

# ---------------- audio ----------------
_V={}
def voice(name):
    from piper import PiperVoice
    if name not in _V:
        _V[name]=PiperVoice.load(f'/tmp/pv/{name}.onnx')
    return _V[name]
VOICES={'m':'en_US-ryan-high','f':'en_US-amy-medium','f2':'en_US-lessac-medium','m2':'en_US-joe-medium','mb':'en_GB-alan-medium','fb':'en_GB-jenny_dioco-medium'}

def seg_wav(vkey,text,path):
    with wave.open(path,'wb') as w:
        voice(VOICES[vkey]).synthesize_wav(text,w)

def make_audio(segments,out_mp3,br='48k'):
    """segments: list of (voiceKey,text) or ('pause',seconds)."""
    if os.path.exists(out_mp3): return
    tmp=out_mp3+'.tmp.wav'; frames=b''; params=None
    for i,(k,t) in enumerate(segments):
        if k=='pause':
            if params is None: params=(1,2,22050)
            frames+=b'\x00\x00'*int(params[2]*t); continue
        p=f'{tmp}.{i}.wav'; seg_wav(k,t,p)
        with wave.open(p,'rb') as r:
            params=(r.getnchannels(),r.getsampwidth(),r.getframerate()); frames+=r.readframes(r.getnframes())
        os.remove(p)
    with wave.open(tmp,'wb') as w:
        w.setnchannels(params[0]); w.setsampwidth(params[1]); w.setframerate(params[2]); w.writeframes(frames)
    subprocess.run(['ffmpeg','-loglevel','error','-y','-i',tmp,'-ac','1','-b:a',br,out_mp3],check=True)
    os.remove(tmp)

def build_p2(audio=True):
    rows=[(ln,c) for ln,c in read('p2.txt')]; out=[]; errs=[]
    tg=targets(len(rows),3,2); rnd=random.Random(21); seen=set()
    os.makedirs(AUD,exist_ok=True)
    for k,(ln,c) in enumerate(rows):
        if len(c)!=6: errs.append(f'p2:{ln} fields={len(c)}'); continue
        typ,q,ok,w1,w2,ex=[x.strip() for x in c]
        if q in seen: errs.append(f'p2:{ln} duplicate'); continue
        seen.add(q)
        o=place(ok,[w1,w2],tg[k],rnd); iid=f'l2x-{len(out)+1:03d}'
        script=q+'\n'+'\n'.join(f'({KEYS[i]}) {t}' for i,t in enumerate(o))
        out.append({'id':iid,'part':2,'type':'Question-Response','audioScript':script,'audioFile':f'audio/{iid}.mp3',
          'questions':[{'id':iid+'-q1','questionText':'Listen to the question and select the best response.',
            'options':[{'key':KEYS[i],'text':t} for i,t in enumerate(o)],'correctAnswer':KEYS[tg[k]],'explanation':ex}]})
        if audio:
            qv=['m','f','f2'][k%3]; rv=['f2','m','f'][k%3]
            segs=[(qv,q),('pause',1.0)]
            for i,t in enumerate(o): segs+= [(rv,f'{KEYS[i]}. {t}'),('pause',0.7)]
            make_audio(segs,os.path.join(AUD,iid+'.mp3'))
    return out,errs


def build_p1(audio=True):
    rows=read('p1.txt'); out=[]; errs=[]
    tg=targets(len(rows),4,1); rnd=random.Random(11)
    os.makedirs(AUD,exist_ok=True)
    for k,(ln,c) in enumerate(rows):
        if len(c)!=7: errs.append(f'p1:{ln} fields={len(c)}'); continue
        pid,ok,w1,w2,w3,ex,alt=[x.strip() for x in c]
        if not os.path.exists(os.path.join(ROOT,'public','img',pid+'.jpg')): errs.append(f'p1:{ln} missing image {pid}')
        if re.search(r'\b(option|choice|statement)\s+[A-D]\b',ex): errs.append(f'p1:{ln} letter in explanation')
        o=place(ok,[w1,w2,w3],tg[k],rnd); iid='l1-'+pid[3:]
        script='\n'.join(f'({KEYS[i]}) {t}' for i,t in enumerate(o))
        out.append({'id':iid,'part':1,'type':'Photographs','audioScript':script,'audioFile':f'audio/{iid}.mp3','imageFile':f'img/{pid}.jpg','imageAlt':alt,
          'questions':[{'id':iid+'-q1','questionText':'Look at the photograph and listen to the four statements. Choose the one that best describes the photograph.',
            'options':[{'key':KEYS[i],'text':t} for i,t in enumerate(o)],'correctAnswer':KEYS[tg[k]],'explanation':ex}]})
        if audio:
            v=['m','f','f2'][k%3]
            segs=[]
            for i,t in enumerate(o): segs+=[(v,f'{KEYS[i]}. {t}'),('pause',1.3)]
            make_audio(segs,os.path.join(AUD,iid+'.mp3'))
    return out,errs

SPK={'us':{'W':'f','W2':'f2','M':'m','M2':'m2','N':'f2'},'uk':{'W':'fb','W2':'f','M':'mb','M2':'m','N':'f2'},'mix':{'W':'fb','W2':'f','M':'m','M2':'mb','N':'f2'}}
LABEL={'W':'Woman','W2':'Woman 2','M':'Man','M2':'Man 2'}

def parse_listen(fname):
    blocks=[]; cur=None
    for l in open(os.path.join(SRC,fname),encoding='utf-8'):
        l=l.rstrip('\n')
        if not l.strip(): continue
        if l.startswith('@'):
            if cur: blocks.append(cur)
            f=l[1:].split('|'); cur={'type':f[0].strip(),'title':f[1].strip(),'acc':(f[2].strip() if len(f)>2 else 'us'),'lines':[],'q':[],'g':None}
        elif l.startswith('G|'):
            f=l.split('|'); cur['g']={'title':f[1],'headers':f[2].split(';'),'rows':[r.split(';') for r in f[3].split('/')]}
        elif l.startswith('Q|'): cur['q'].append(l.split('|'))
        else:
            sp,t=l.split(':',1); cur['lines'].append((sp.strip(),t.strip()))
    if cur: blocks.append(cur)
    return blocks

def build_listen(files,part,prefix,seed,audio=True,br='32k'):
    blocks=[b for f in files if os.path.exists(os.path.join(SRC,f)) for b in parse_listen(f)]
    out=[]; errs=[]; rnd=random.Random(seed)
    tg=targets(len(blocks)*3,4,seed+1); k=0; seen=set(); os.makedirs(AUD,exist_ok=True)
    for b in blocks:
        t=b['title']
        if t in seen: errs.append(f'{prefix}: duplicate title {t}')
        seen.add(t)
        if len(b['q'])!=3: errs.append(f'{prefix} {t}: needs 3 questions, has {len(b["q"])}')
        qs=[]; iid=f'{prefix}-{len(out)+1:03d}'
        for i,c in enumerate(b['q']):
            if len(c)!=7: errs.append(f'{prefix} {t} Q{i+1}: fields={len(c)}'); continue
            _,q,ok,w1,w2,w3,ex=[x.strip() for x in c]
            if len({ok.lower(),w1.lower(),w2.lower(),w3.lower()})!=4: errs.append(f'{prefix} {t} Q{i+1}: dup options')
            if re.search(r'\b(option|choice)\s+[A-D]\b',ex): errs.append(f'{prefix} {t} Q{i+1}: letter in explanation')
            tt=tg[k]; k+=1; o=place(ok,[w1,w2,w3],tt,rnd)
            qs.append({'id':f'{iid}-q{i+1}','questionText':q,'options':[{'key':KEYS[j],'text':x} for j,x in enumerate(o)],'correctAnswer':KEYS[tt],'explanation':ex})
        sp=SPK[b['acc']]
        for who,_ in b['lines']:
            if who not in sp: errs.append(f'{prefix} {t}: unknown speaker {who}')
        script='\n'.join((LABEL.get(w,'Speaker')+': ' if part==3 else '')+x for w,x in b['lines'])
        item={'id':iid,'part':part,'type':b['type'],'title':t,'audioScript':script,'audioFile':f'audio/{iid}.mp3','questions':qs}
        if b['g']: item['graphic']=b['g']
        out.append(item)
        if audio and not errs:
            segs=[]
            for w,x in b['lines']: segs+=[(sp[w],x),('pause',0.45 if part==3 else 0.2)]
            segs.append(('pause',1.8))
            for i,q in enumerate(qs): segs+=[(sp['N'],f'Number {i+1}. {q["questionText"]}'),('pause',3.2)]
            make_audio(segs,os.path.join(AUD,iid+'.mp3'),br)
    return out,errs

def parse_blocks(fname):
    blocks=[]; cur=None
    for l in open(os.path.join(SRC,fname),encoding='utf-8'):
        l=l.rstrip('\n')
        if l.startswith('@'):
            if cur: blocks.append(cur)
            t,title=l[1:].split('|',1); cur={'type':t.strip(),'title':title.strip(),'text':[],'q':[]}
        elif cur is not None:
            if re.match(r'^Q\d+\|',l): cur['q'].append(l.split('|'))
            elif l.strip() or cur['text']: cur['text'].append(l)
    if cur: blocks.append(cur)
    return blocks

def build_p6():
    files=[f for f in ['p6_a.txt','p6_b.txt','p6_c.txt','p6_d.txt'] if os.path.exists(os.path.join(SRC,f))]
    blocks=[b for f in files for b in parse_blocks(f)]
    out=[]; errs=[]; rnd=random.Random(61)
    tg=targets(len(blocks)*4,4,6); k=0
    for bi,b in enumerate(blocks):
        text='\n'.join(b['text']).strip(); qs=[]
        if len(b['q'])!=4: errs.append(f"p6 {b['title']}: {len(b['q'])} questions"); continue
        for n in range(1,5):
            if f'[{n}]' not in text: errs.append(f"p6 {b['title']}: missing [{n}]")
            text=text.replace(f'[{n}]',f'[{130+n}]')
        for i,c in enumerate(b['q']):
            if len(c)!=6: errs.append(f"p6 {b['title']} Q{i+1} fields={len(c)}"); continue
            ok,w1,w2,w3,ex=[x.strip() for x in c[1:]]
            if len({ok.lower(),w1.lower(),w2.lower(),w3.lower()})!=4: errs.append(f"p6 {b['title']} Q{i+1} dup options")
            t=tg[k]; k+=1
            o=place(ok,[w1,w2,w3],t,rnd)
            qs.append({'number':131+i,'options':[{'key':KEYS[j],'text':x} for j,x in enumerate(o)],'correctAnswer':KEYS[t],'explanation':ex})
        out.append({'id':f'p6x-{len(out)+1:03d}','title':b['title'],'type':b['type'],'text':text,'questions':qs})
    return out,errs

def parse_p7(fname):
    blocks=[]; cur=None
    for l in open(os.path.join(SRC,fname),encoding='utf-8'):
        l=l.rstrip('\n')
        if l.startswith('@'):
            if cur: blocks.append(cur)
            parts=l[1:].split('|'); cur={'fmt':parts[0],'type':parts[1].strip(),'title':parts[2].strip(),'text':[],'q':[]}
        elif cur is not None:
            if l.startswith('Q|') or l.startswith('QI|'): cur['q'].append(l.split('|'))
            else: cur['text'].append(l)
    if cur: blocks.append(cur)
    return blocks

def build_p7():
    files=[f for f in ['p7_a.txt','p7_b.txt','p7_c.txt','p7_d.txt','p7_e.txt'] if os.path.exists(os.path.join(SRC,f))]
    blocks=[b for f in files for b in parse_p7(f)]
    out=[]; errs=[]; rnd=random.Random(71)
    total=sum(len(b['q']) for b in blocks); tg=targets(total,4,7); k=0
    for b in blocks:
        raw='\n'.join(b['text']).strip()
        pas=[]
        for chunk in re.split(r'\n---\n',raw):
            chunk=chunk.strip(); label=None
            m=re.match(r'^## (.*)\n',chunk)
            if m: label=m.group(1).strip(); chunk=chunk[m.end():].strip()
            pas.append({'label':label,'text':chunk} if label else {'text':chunk})
        multi=b['fmt']=='Multiple'
        qs=[]
        for i,c in enumerate(b['q']):
            if c[0]=='QI':
                if len(c)!=4 or c[2].strip() not in '1234': errs.append(f"p7 {b['title']} Q{i+1} bad QI"); continue
                kk=int(c[2].strip())-1
                qs.append({'id':f"p7x-{len(out)+1:03d}-q{i+1}",'questionText':c[1].strip(),'options':[{'key':KEYS[j],'text':f'[{j+1}]'} for j in range(4)],'correctAnswer':KEYS[kk],'explanation':c[3].strip()})
                continue
            if len(c)!=7: errs.append(f"p7 {b['title']} Q{i+1} fields={len(c)}"); continue
            q,ok,w1,w2,w3,ex=[x.strip() for x in c[1:]]
            if len({ok.lower(),w1.lower(),w2.lower(),w3.lower()})!=4: errs.append(f"p7 {b['title']} Q{i+1} dup options")
            t=tg[k]; k+=1; o=place(ok,[w1,w2,w3],t,rnd)
            qs.append({'id':f"p7x-{len(out)+1:03d}-q{i+1}",'questionText':q,'options':[{'key':KEYS[j],'text':x} for j,x in enumerate(o)],'correctAnswer':KEYS[t],'explanation':ex})
        if multi and len(pas)<2: errs.append(f"p7 {b['title']}: multiple needs >=2 passages")
        out.append({'id':f'p7x-{len(out)+1:03d}','title':b['title'],'format':'Multiple Passages' if multi else 'Single Passage',
          'type':(('Double Passage (' if len(pas)==2 else 'Triple Passage (')+b['type']+')') if multi else b['type'],'passages':pas,'questions':qs})
    return out,errs

def _main():
    which=sys.argv[1:] or ['p5']
    os.makedirs(OUT,exist_ok=True)
    if 'p5' in which:
        ex=json.load(open(os.path.join(ROOT,'content-src','_existing_p5.json'))) if os.path.exists(os.path.join(SRC,'_existing_p5.json')) else []
        out,errs=build_p5(ex)
        json.dump(out,open(os.path.join(OUT,'part5_extra.json'),'w'),ensure_ascii=False,indent=0)
        print('p5',len(out),'errors',len(errs)); print('\n'.join(errs[:30]))

    if 'p2' in which or 'p2noaudio' in which:
        out,errs=build_p2(audio='p2' in which)
        json.dump(out,open(os.path.join(OUT,'part2_extra.json'),'w'),ensure_ascii=False,indent=0)
        print('p2',len(out),'errors',len(errs)); print('\n'.join(errs[:30]))
    if 'p1' in which or 'p1noaudio' in which:
        out,errs=build_p1(audio='p1' in which)
        json.dump(out,open(os.path.join(OUT,'part1_extra.json'),'w'),ensure_ascii=False,indent=0)
        print('p1',len(out),'errors',len(errs)); print('\n'.join(errs[:30]))
    for part,files,pre,seed in [(3,['p3_a.txt','p3_b.txt','p3_c.txt','p3_d.txt'],'l3x',31),(4,['p4_a.txt','p4_b.txt','p4_c.txt','p4_d.txt'],'l4x',41)]:
        k='p%d'%part
        if k in which or k+'noaudio' in which:
            out,errs=build_listen(files,part,pre,seed,audio=(k in which))
            json.dump(out,open(os.path.join(OUT,f'part{part}_extra.json'),'w'),ensure_ascii=False,indent=0)
            print(k,len(out),'errors',len(errs)); print('\n'.join(errs[:40]))
    if 'p6' in which:
        out,errs=build_p6()
        json.dump(out,open(os.path.join(OUT,'part6_extra.json'),'w'),ensure_ascii=False,indent=0)
        print('p6',len(out),'errors',len(errs)); print('\n'.join(errs[:30]))
    if 'p7' in which:
        out,errs=build_p7()
        json.dump(out,open(os.path.join(OUT,'part7_extra.json'),'w'),ensure_ascii=False,indent=0)
        print('p7',len(out),'sets',sum(len(x['questions']) for x in out),'questions','errors',len(errs)); print('\n'.join(errs[:30]))
if __name__=='__main__': _main()
