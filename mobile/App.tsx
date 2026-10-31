import React, { useState } from 'react';
import {
  Alert, KeyboardAvoidingView, Platform, Pressable, SafeAreaView,
  ScrollView, StatusBar, StyleSheet, Text, TextInput, View,
} from 'react-native';

// This is an adult-only, entirely fictional LOCAL UI DEMO.
// No genuine age assurance, authentication, matching, messaging, or moderation exists.
// Before any real user access, replace ALL local state with server-enforced services.

const C = {
  page: '#f8edeb', alt: '#fae1dd', linen: '#ece4db', card: '#ffe5d9',
  card2: '#fcd5ce', border: '#e8e8e4', sage: '#d8e2dc', blush: '#fec5bb',
  peach: '#fec89a', chip: '#ffd7ba', ink: '#382d2a', muted: '#6a5953',
} as const;
const displayFont = Platform.select({ ios: 'Georgia', android: 'serif', default: 'serif' });
type Tab = 'Discover' | 'Communities' | 'Requests' | 'Messages' | 'Profile' | 'Safety';
type Person = { id: string; name: string; age: number; city: string; goal: string; shared: string[]; note: string; initials: string; tone: string };
type DemoMessage = { id: number; from: 'you' | 'them'; body: string };
const profiles: Person[] = [
  { id:'maya',name:'Maya',age:26,city:'Bengaluru',goal:'Long-term relationship',shared:['Formula 1','Indie music','Films'],note:'You both enjoy race weekends and finding a new song to obsess over.',initials:'MY',tone:C.card2 },
  { id:'zoe',name:'Zoe',age:28,city:'Mumbai',goal:'Long-term relationship',shared:['FC Barcelona','Photography'],note:'You both love a Barça match night and creative weekends.',initials:'ZO',tone:C.sage },
  { id:'sam',name:'Sam',age:27,city:'Pune',goal:'Open to exploring',shared:['Gaming','Football','Cinema'],note:'A shared love of co-op games and late-night films.',initials:'SM',tone:C.chip },
  { id:'nisha',name:'Nisha',age:25,city:'Delhi',goal:'Long-term relationship',shared:['Cricket','F1','Books'],note:'You have sports and Sunday reading in common.',initials:'NI',tone:C.alt },
];
const interests = [
  {id:'f1',icon:'🏎',title:'Formula 1',description:'For the race-weekend people.'},
  {id:'football',icon:'⚽',title:'Football & Barça',description:'More than just ninety minutes.'},
  {id:'cricket',icon:'🏏',title:'Cricket Club',description:'Every match has a story.'},
  {id:'games',icon:'🎮',title:'Gaming & Esports',description:'Your next co-op partner.'},
  {id:'music',icon:'♫',title:'Music Lovers',description:'Find the soundtrack you share.'},
  {id:'films',icon:'🎬',title:'Cinema Circle',description:'Your next favorite conversation.'},
];
const TABS: Tab[] = ['Discover','Communities','Requests','Messages','Profile','Safety'];

export default function App() {
  const [stage,setStage] = useState<'gate'|'underage'|'preview'>('gate');
  const [tab,setTab] = useState<Tab>('Discover');
  const [pending,setPending] = useState<string[]>([]);
  const [declined,setDeclined] = useState<string[]>([]);
  const [connected,setConnected] = useState<string[]>(['maya']); // DEMO: explicitly fictional pre-approved conversation
  const [blocked,setBlocked] = useState<string[]>([]);
  const [joined,setJoined] = useState<string[]>([]);
  const [selectedChat,setSelectedChat] = useState('maya');
  const [draft,setDraft] = useState('');
  const [messages,setMessages] = useState<Record<string,DemoMessage[]>>({
    maya:[{id:1,from:'them',body:'Fictional demo: Which F1 race would you love to watch live?'},{id:2,from:'you',body:'Monaco would be incredible!'}]
  });
  const [isDiscoverable,setDiscoverable] = useState(false); // safer demo default
  const [showOnline,setShowOnline] = useState(false);
  const [reportCount,setReportCount] = useState(0);

  const block = (id:string) => {
    Alert.alert('Block fictional profile?', 'This only hides the profile in this local demo. Real blocking requires a server.', [
      {text:'Cancel',style:'cancel'},
      {text:'Block demo profile',style:'destructive',onPress:()=>{
        setBlocked(v=>[...new Set([...v,id])]);setConnected(v=>v.filter(i=>i!==id));setPending(v=>v.filter(i=>i!==id));
      }}
    ]);
  };
  const report = (person:Person) => {
    Alert.alert('Report fictional profile?', `This is not sent to moderators. Reporting ${person.name} records only a local demonstration.`,[
      {text:'Cancel',style:'cancel'},
      {text:'Record demo report',onPress:()=>setReportCount(v=>v+1)},
    ]);
  };
  const send = () => {
    if(!connected.includes(selectedChat) || blocked.includes(selectedChat) || !draft.trim())return;
    setMessages(v=>({...v,[selectedChat]:[...(v[selectedChat]||[]),{id:Date.now(),from:'you',body:draft.trim()}]}));
    setDraft('');
  };

  const Brand = () => <View style={styles.brandRow}><View style={styles.orbit}><Text style={styles.orbitText}>◎</Text></View><Text style={styles.wordmark}>match<Text style={{color:C.muted}}>sphere.</Text></Text></View>;
  const Button = ({label,onPress,secondary=false,disabled=false}:{label:string;onPress:()=>void;secondary?:boolean;disabled?:boolean})=>(
    <Pressable accessibilityRole="button" accessibilityLabel={label} disabled={disabled} onPress={onPress}
      style={({pressed})=>[styles.button,secondary?styles.secondaryButton:styles.primaryButton,disabled&&{opacity:.5},pressed&&{opacity:.75}]}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
  const Pill = ({children}:{children:React.ReactNode}) => <View style={styles.pill}><Text style={styles.pillText}>{children}</Text></View>;
  const Card = ({children,tint}:{children:React.ReactNode;tint?:string}) => <View style={[styles.card,tint?{backgroundColor:tint}:null]}>{children}</View>;
  const Label = ({children}:{children:React.ReactNode}) => <Text style={styles.eyebrow}>{children}</Text>;
  const SectionHead = ({title,subtitle}:{title:string;subtitle:string})=><View style={{marginBottom:20}}><Label>THE MATCHSPHERE UNIVERSE</Label><Text style={styles.screenHeading}>{title}</Text><Text style={styles.muted}>{subtitle}</Text></View>;

  if(stage!=='preview')return <SafeAreaView style={styles.safe}><StatusBar barStyle="dark-content" backgroundColor={C.page}/><View style={styles.gate}>
    <Brand/><View style={styles.gateOrnament}><Text style={{fontSize:82,color:C.ink}}>◎</Text></View>
    {stage==='underage' ? <><Text style={styles.hero}>For adults, only.</Text><Text style={[styles.muted,styles.center]}>MatchSphere is designed for people aged 18 or older. You cannot use the dating service if you are under 18.</Text><Button label="Back" secondary onPress={()=>setStage('gate')}/></> :
      <><Label>iOS & ANDROID · PRIVATE CONCEPT PREVIEW</Label><Text style={styles.hero}>Meet people who match your world.</Text><Text style={[styles.muted,styles.center]}>Discover a softer way to connect through shared interests, communities and clear intentions.</Text>
        <Card tint={C.card}><Text style={styles.cardTitle}>18+ demo only</Text><Text style={styles.muted}>All profiles and chats are fictional. This is not an age verification, a real signup or a live dating service.</Text></Card>
        <Button label="I'm 18+ · Explore fictional preview" onPress={()=>setStage('preview')}/><Button label="I'm under 18" secondary onPress={()=>setStage('underage')}/>
      </>}
    <Text style={styles.tiny}>No personal details are sent or collected. App Store releases are not available yet.</Text>
  </View></SafeAreaView>;

  return <SafeAreaView style={styles.safe}><StatusBar barStyle="dark-content" backgroundColor={C.page}/>
    <View style={styles.top}><Brand/><View style={styles.demoTag}><Text style={styles.demoTagText}>FICTIONAL DEMO</Text></View></View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabRow} accessibilityRole="tablist">
      {TABS.map(t=><Pressable key={t} accessibilityRole="tab" accessibilityState={{selected:tab===t}} onPress={()=>setTab(t)} style={[styles.tab,tab===t&&styles.tabActive]}><Text style={[styles.tabLabel,tab===t&&{fontWeight:'700'}]}>{t}</Text></Pressable>)}
    </ScrollView>
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS==='ios'?'padding':undefined}>
    <ScrollView style={{flex:1}} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.content}>
      {tab==='Discover'&&<><SectionHead title="Find your people." subtitle="Shared passions are where the best conversations begin."/>
        <View style={styles.notice}><Text style={styles.noticeText}>These are illustrated adult profiles, not genuine matches. No AI or accounts are connected.</Text></View>
        {profiles.filter(p=>!blocked.includes(p.id)&&!declined.includes(p.id)).map(p=><Card key={p.id}><View style={styles.personTop}><View style={[styles.avatar,{backgroundColor:p.tone}]}><Text style={styles.avatarText}>{p.initials}</Text></View><View style={{flex:1}}><Text style={styles.cardTitle}>{p.name}, {p.age}</Text><Text style={styles.muted}>{p.city} · {p.goal}</Text></View></View>
          <View style={styles.chips}>{p.shared.map(i=><Pill key={i}>{i}</Pill>)}</View>
          <Text style={styles.description}>{p.note}</Text>
          <View style={styles.actions}><Button label={connected.includes(p.id)?'Connected ✓':pending.includes(p.id)?'Request pending':'Send request'} disabled={connected.includes(p.id)||pending.includes(p.id)} onPress={()=>setPending(v=>[...v,p.id])}/><Button secondary label="Pass" onPress={()=>setDeclined(v=>[...v,p.id])}/></View>
          <View style={styles.textActions}><Pressable onPress={()=>block(p.id)} accessibilityRole="button"><Text style={styles.link}>Block</Text></Pressable><Pressable onPress={()=>report(p)} accessibilityRole="button"><Text style={styles.link}>Report</Text></Pressable></View>
        </Card>)}
      </>}
      {tab==='Communities'&&<><SectionHead title="Your kind of universe." subtitle="Meet people around what you care about. Real communities aren't live yet."/>
        {interests.map(c=><Card key={c.id} tint={joined.includes(c.id)?C.alt:C.card}><Text style={styles.largeEmoji}>{c.icon}</Text><Text style={styles.cardTitle}>{c.title}</Text><Text style={styles.muted}>{c.description}</Text><View style={{marginTop:14}}><Button label={joined.includes(c.id)?'Joined demo group ✓':'Join demo group'} secondary onPress={()=>setJoined(v=>v.includes(c.id)?v.filter(id=>id!==c.id):[...v,c.id])}/></View></Card>)}
      </>}
      {tab==='Requests'&&<><SectionHead title="Connection requests." subtitle="People should always choose who can message them."/>
        <Card><Label>ILLUSTRATIVE INCOMING REQUEST</Label><Text style={styles.cardTitle}>Zoe, 28 · Mumbai</Text><Text style={styles.muted}>You both love FC Barcelona and photography.</Text>
        {!connected.includes('zoe')&&!blocked.includes('zoe')&&!declined.includes('zoe')?<View style={styles.actions}><Button label="Accept demo request" onPress={()=>{setConnected(v=>[...v,'zoe']);setMessages(v=>({...v,zoe:[{id:3,from:'them',body:'Demo: Did you catch the Barça match?'}]}))}}/><Button label="Decline" secondary onPress={()=>setDeclined(v=>[...v,'zoe'])}/></View>:<Text style={styles.muted}>{connected.includes('zoe')?'Approved in this demo. Messaging is now enabled.':'Request unavailable.'}</Text>}</Card>
        <Card><Text style={styles.cardTitle}>Your outgoing requests</Text>{pending.length?<Text style={styles.muted}>{pending.length} pending demo request(s). No requests are delivered.</Text>:<Text style={styles.muted}>You haven't sent any demo requests yet.</Text>}</Card>
      </>}
      {tab==='Messages'&&<><SectionHead title="A little hello." subtitle="Conversations open only after mutual acceptance."/>
        <View style={styles.notice}><Text style={styles.noticeText}>Messages stay in device memory during this demo session. They are never delivered to another person.</Text></View>
        <View style={styles.chips}>{connected.filter(id=>!blocked.includes(id)).map(id=><Pressable key={id} onPress={()=>setSelectedChat(id)} style={[styles.tab,selectedChat===id&&styles.tabActive]}><Text style={styles.tabLabel}>{profiles.find(p=>p.id===id)?.name}</Text></Pressable>)}</View>
        {connected.includes(selectedChat)&&!blocked.includes(selectedChat)?<Card tint={C.alt}><Text style={styles.cardTitle}>{profiles.find(p=>p.id===selectedChat)?.name} · accepted demo connection</Text>
          {(messages[selectedChat]||[]).map(m=><View key={m.id} style={[styles.chatBubble,m.from==='you'?styles.chatMine:styles.chatTheirs]}><Text style={styles.chatText}>{m.body}</Text></View>)}
          <View style={styles.composer}><TextInput style={styles.input} accessibilityLabel="Message for the fictional demo chat" placeholder="Write a fictional message…" placeholderTextColor={C.muted} value={draft} onChangeText={setDraft}/><Button label="Send" disabled={!draft.trim()} onPress={send}/></View>
          <View style={{marginTop:12}}><Button label="Block this profile" secondary onPress={()=>block(selectedChat)}/></View>
        </Card>:<Card><Text style={styles.muted}>Select an accepted connection to view its local demo conversation.</Text></Card>}
      </>}
      {tab==='Profile'&&<><SectionHead title="Your world, your way." subtitle="A sample profile only—no signup or profile storage."/>
        <Card><View style={styles.personTop}><View style={[styles.avatar,{backgroundColor:C.peach}]}><Text style={styles.avatarText}>YOU</Text></View><View style={{flex:1}}><Text style={styles.cardTitle}>Alex, 25</Text><Text style={styles.muted}>Fictional account · Mumbai</Text></View></View><View style={styles.chips}><Pill>F1</Pill><Pill>Films</Pill><Pill>Music</Pill></View><Text style={styles.description}>Looking for a committed relationship, honest communication and someone who enjoys sharing their world.</Text></Card>
        <Card><Text style={styles.cardTitle}>Privacy preferences (demo)</Text><Text style={styles.muted}>These settings affect only this local screen. They are not server-enforced.</Text>
          <Button secondary label={`Discoverable: ${isDiscoverable?'On':'Off'}`} onPress={()=>setDiscoverable(v=>!v)}/>
          <View style={{height:8}}/><Button secondary label={`Online status: ${showOnline?'Visible':'Hidden'}`} onPress={()=>setShowOnline(v=>!v)}/>
        </Card>
      </>}
      {tab==='Safety'&&<><SectionHead title="Care is part of the design." subtitle="Boundaries, consent and safety must come first."/>
        <Card><Text style={styles.cardTitle}>Before we launch</Text><Text style={styles.description}>18+ identity assurance, secure login, server-side blocking, report moderation, scam prevention and consent-gated messaging are required before real users can join.</Text><Pill>Safety features always free</Pill></Card>
        <Card tint={C.sage}><Text style={styles.cardTitle}>Your demo safety actions</Text><Text style={styles.muted}>Blocked fictional profiles: {blocked.length}</Text><Text style={styles.muted}>Local demo reports: {reportCount}</Text>
          <View style={{marginTop:12}}><Button label="Unblock all demo profiles" secondary onPress={()=>setBlocked([])}/></View>
        </Card>
        <Card><Text style={styles.cardTitle}>Community guidelines</Text><Text style={styles.description}>Be truthful about your intentions and relationship status. Ask before messaging, respect no, never pressure others, and report harassment or suspicious behavior.</Text></Card>
      </>}
      <Text style={[styles.tiny,{marginTop:25}]}>MatchSphere · Native-only app concept · iOS + Android · 18+ · No real user data.</Text>
    </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>;
}

const styles=StyleSheet.create({
  safe:{flex:1,backgroundColor:C.page},top:{paddingHorizontal:20,paddingTop:12,paddingBottom:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:C.page},brandRow:{flexDirection:'row',gap:9,alignItems:'center'},orbit:{width:36,height:36,borderRadius:12,backgroundColor:C.blush,alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:C.border},orbitText:{fontSize:28,lineHeight:34,color:C.ink},wordmark:{fontSize:23,fontWeight:'800',letterSpacing:-1.1,color:C.ink},demoTag:{borderRadius:999,backgroundColor:C.sage,paddingHorizontal:10,paddingVertical:7},demoTagText:{fontSize:9,letterSpacing:.6,fontWeight:'800',color:C.ink},
  tabRow:{paddingHorizontal:14,paddingVertical:10,gap:7,alignItems:'center',flexGrow:0},tab:{borderRadius:999,paddingHorizontal:13,paddingVertical:12,backgroundColor:C.linen,borderWidth:1,borderColor:C.border,minHeight:44,justifyContent:'center'},tabActive:{backgroundColor:C.blush,borderColor:C.blush},tabLabel:{color:C.ink,fontSize:12,fontWeight:'600'},
  content:{paddingHorizontal:20,paddingTop:16,paddingBottom:40},eyebrow:{fontSize:11,fontWeight:'800',color:C.muted,letterSpacing:1.3,marginBottom:9},screenHeading:{fontFamily:displayFont,fontSize:37,lineHeight:44,letterSpacing:-1,color:C.ink,marginBottom:7},hero:{fontFamily:displayFont,fontSize:44,lineHeight:52,textAlign:'center',color:C.ink,letterSpacing:-1},muted:{fontSize:14,lineHeight:22,color:C.muted},center:{textAlign:'center'},
  gate:{flex:1,padding:26,alignItems:'center',justifyContent:'center',gap:17},gateOrnament:{width:145,height:145,borderRadius:80,backgroundColor:C.alt,justifyContent:'center',alignItems:'center',borderWidth:2,borderColor:C.card2,marginVertical:12},
  card:{backgroundColor:C.card,borderRadius:24,padding:20,borderWidth:1,borderColor:C.border,marginBottom:13,gap:8},cardTitle:{color:C.ink,fontSize:21,fontWeight:'700',letterSpacing:-.3},description:{color:C.ink,fontSize:15,lineHeight:23,marginVertical:5},personTop:{flexDirection:'row',alignItems:'center',gap:12},avatar:{width:60,height:60,borderRadius:30,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:C.border},avatarText:{fontWeight:'800',fontSize:17,color:C.ink},chips:{flexDirection:'row',flexWrap:'wrap',gap:7,marginVertical:8},pill:{alignSelf:'flex-start',backgroundColor:C.chip,borderRadius:99,paddingHorizontal:11,paddingVertical:6},pillText:{fontSize:12,fontWeight:'600',color:C.ink},
  button:{minHeight:46,borderRadius:999,paddingHorizontal:17,paddingVertical:12,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:C.ink},primaryButton:{backgroundColor:C.blush},secondaryButton:{backgroundColor:C.page},buttonText:{fontSize:13,fontWeight:'700',textAlign:'center',color:C.ink},actions:{flexDirection:'row',gap:9,flexWrap:'wrap',marginTop:12},textActions:{flexDirection:'row',gap:22,marginTop:5},link:{color:C.ink,fontSize:13,textDecorationLine:'underline',fontWeight:'600',paddingVertical:8},
  notice:{borderRadius:14,padding:14,backgroundColor:C.sage,marginBottom:18},noticeText:{fontSize:13,color:C.ink,lineHeight:20},largeEmoji:{fontSize:35,marginBottom:5},chatBubble:{marginTop:12,maxWidth:'89%',padding:12,borderRadius:15},chatMine:{backgroundColor:C.peach,alignSelf:'flex-end'},chatTheirs:{backgroundColor:C.card2,alignSelf:'flex-start'},chatText:{fontSize:14,color:C.ink,lineHeight:21},composer:{flexDirection:'row',alignItems:'center',gap:8,marginTop:18},input:{flex:1,minWidth:80,minHeight:46,backgroundColor:C.page,borderRadius:18,borderWidth:1,borderColor:C.border,paddingHorizontal:12,paddingVertical:8,color:C.ink,fontSize:13},tiny:{fontSize:11,lineHeight:17,color:C.muted,textAlign:'center',maxWidth:300},
});
