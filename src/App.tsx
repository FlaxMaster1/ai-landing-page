import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import { ArrowDown, ArrowRight, BookOpen, BrainCircuit, Building2, Check, ChevronRight, Compass, ExternalLink, FlaskConical, Globe2, GraduationCap, Lightbulb, Network, Sparkles, Target, Users } from 'lucide-react'
import whartonReverseLogo from './assets/wharton-reverse-logo.png'
import aiLearningPathways from './assets/ai-learning-pathways.png'

type LinkItem = { title: string; description: string; url: string }
type FocusItem = { title: string; description: string }
type Stage = { slug: string; short: string; title: string; phase: string; audience: string; color: string; promise: string; question: string; role: string; account: string; focus: FocusItem[]; proof: LinkItem[]; connections: LinkItem[]; success: string; primary: { label: string; url: string } }

const stages: Stage[] = [
  {
    slug: 'high-school', short: 'High School', title: 'Explore & Understand', phase: '01 / Foundations', audience: 'Curious learners and future students', color: '#d9a719',
    promise: 'Build the judgment to use powerful tools well.', question: 'How can AI expand curiosity without doing the learning for me?',
    role: 'A bounded tutor for questions, practice, comparison, and discovery.', account: 'Reason through the problem, show your process, test the output, and develop your own voice.',
    focus: [
      { title: 'Learn the logic', description: 'Understand how a problem works before asking AI to help solve it.' },
      { title: 'Ask better questions', description: 'Use prompts to sharpen curiosity—not to skip the productive struggle of learning.' },
      { title: 'Create in your own voice', description: 'Treat AI as a thought partner while keeping authorship and reflection distinctly yours.' },
      { title: 'Test the technology', description: 'Compare outputs, find errors, recognize bias, and learn when a tool should not be trusted.' },
    ],
    proof: [
      { title: 'Wharton Data Science Academy', description: 'A pre-college introduction to data science, machine learning, and real-world applications.', url: 'https://globalyouth.wharton.upenn.edu/programs-courses/data-science-academy/' },
      { title: 'High School Data Science Competition', description: 'Team-based analysis that rewards evidence, interpretation, and communication.', url: 'https://wsb.wharton.upenn.edu/wharton-data-competition/2026-wharton-high-school-data-science-competition-competition-playbook/' },
      { title: 'Global Youth AI Policy', description: 'Clear expectations for responsible use, attribution, and student ownership.', url: 'https://globalyouth.wharton.upenn.edu/ai-policy/' },
      { title: 'AI for Society Research Lab', description: 'Research exploring how AI can address consequential social challenges.', url: 'https://ai-analytics.wharton.upenn.edu/wharton-ai-for-society-research-lab/' },
    ],
    connections: [
      { title: 'AI for Society', description: 'Responsible, human-centered applications of AI.', url: 'https://ai-analytics.wharton.upenn.edu/for-society/' },
      { title: 'Penn GSE AI & Pedagogy', description: 'How educators can teach and learn with AI.', url: 'https://www.gse.upenn.edu/our-expertise/penn-ai-pedagogy-initiative' },
      { title: 'Penn Engineering AI', description: 'Explore AI learning and research across Penn Engineering.', url: 'https://ai.seas.upenn.edu/' },
    ],
    success: 'You can explain your reasoning, identify uncertainty, and use AI without surrendering the work of learning.', primary: { label: 'Explore Wharton Global Youth', url: 'https://globalyouth.wharton.upenn.edu/' },
  },
  {
    slug: 'early-career', short: 'Early Career', title: 'Build & Apply', phase: '02 / Capability', audience: 'Undergraduate, MBA, and early-career learners', color: '#2476c9',
    promise: 'Learn the work—and learn how to improve it.', question: 'How do I pair strong fundamentals with the fluency to build, analyze, and decide with AI?',
    role: 'A collaborator for coding, modeling, ideation, synthesis, and rapid experimentation.', account: 'Know the underlying method, validate every conclusion, document your use, and make the final call.',
    focus: [
      { title: 'Build technical fluency', description: 'Learn data, analytics, and AI concepts deeply enough to understand what the tools are doing.' },
      { title: 'Practice on real problems', description: 'Apply AI with organizations, faculty, and peers where context and consequences matter.' },
      { title: 'Interrogate the output', description: 'Check assumptions, sources, edge cases, uncertainty, and business relevance.' },
      { title: 'Communicate the decision', description: 'Turn analysis into a clear recommendation and remain accountable for the judgment behind it.' },
    ],
    proof: [
      { title: 'AI & Analytics for Students', description: 'A central hub for courses, experiential programs, tools, and opportunities.', url: 'https://ai-analytics.wharton.upenn.edu/for-students/' },
      { title: 'Recommended For-Credit Courses', description: 'A curated path through AI, analytics, data science, and related disciplines.', url: 'https://ai-analytics.wharton.upenn.edu/for-students/recommended-for-credit-courses/' },
      { title: 'AI & Analytics Accelerator', description: 'Student teams work with faculty and organizations on high-value data challenges.', url: 'https://ai-analytics.wharton.upenn.edu/for-students/ai-analytics-accelerator/' },
      { title: 'Generative AI Labs', description: 'A hands-on environment for exploring generative AI in teaching and business.', url: 'https://gail.wharton.upenn.edu/gen-ai-studio/' },
      { title: 'Khan Family AI for Business Award', description: 'Recognition for student work that advances practical applications of AI.', url: 'https://ai-analytics.wharton.upenn.edu/for-students/khan-family-ai-for-business-award/' },
      { title: 'iWRDS Data Catalog', description: 'Discover research-ready data resources across industries and disciplines.', url: 'https://ai-analytics.wharton.upenn.edu/iwrds-data-catalog/' },
    ],
    connections: [
      { title: 'Penn AI', description: 'University-wide education, research, and innovation.', url: 'https://ai.upenn.edu/' },
      { title: 'Student Clubs', description: 'Find student-led AI and analytics communities.', url: 'https://ai-analytics.wharton.upenn.edu/for-students/student-clubs/' },
      { title: 'Generative AI Labs', description: 'Tools and experiments for the Wharton community.', url: 'https://gail.wharton.upenn.edu/' },
    ],
    success: 'You can build with AI, explain the method, verify the result, and translate evidence into a responsible business decision.', primary: { label: 'Explore student opportunities', url: 'https://ai-analytics.wharton.upenn.edu/for-students/' },
  },
  {
    slug: 'mid-career', short: 'Mid-Career', title: 'Transform & Manage', phase: '03 / Transformation', audience: 'Managers, operators, and experienced professionals', color: '#148069',
    promise: 'Turn AI capability into organizational capability.', question: 'Where can AI improve the work—and how do I redesign the system around it?',
    role: 'An accelerator for workflow redesign, scenario analysis, pattern finding, and team productivity.', account: 'Frame the right problem, choose the right workflow, involve the right people, and govern how results are used.',
    focus: [
      { title: 'Redesign the workflow', description: 'Look beyond task automation to rethink how people, data, and decisions fit together.' },
      { title: 'Lead adoption', description: 'Build trust, set expectations, and help teams develop the confidence to work differently.' },
      { title: 'Measure value', description: 'Define the operational, customer, and strategic outcomes that make an AI initiative worth scaling.' },
      { title: 'Manage risk', description: 'Put review, escalation, privacy, and quality controls where the stakes demand them.' },
    ],
    proof: [
      { title: 'Professional Learning Hub', description: 'Programs and resources that connect current research to professional practice.', url: 'https://ai-analytics.wharton.upenn.edu/for-industry/professional-learning-hub/' },
      { title: 'Wharton AI & Analytics Insights', description: 'Faculty research translated into timely, practical perspective.', url: 'https://ai-analytics.wharton.upenn.edu/wharton-ai-analytics-insights/' },
      { title: 'AI for Business', description: 'Executive learning focused on strategy, implementation, and competitive value.', url: 'https://executiveeducation.wharton.upenn.edu/for-individuals/all-programs/ai-for-business/' },
      { title: 'Wharton Online', description: 'Flexible learning for professionals building business and analytics capabilities.', url: 'https://executiveeducation.wharton.upenn.edu/online-learning/' },
      { title: 'Executive MBA Curriculum', description: 'Rigorous management education designed for experienced leaders.', url: 'https://executivemba.wharton.upenn.edu/emba-curriculum/' },
      { title: 'Cases & White Papers', description: 'Evidence and examples for turning AI questions into operating decisions.', url: 'https://ai-analytics.wharton.upenn.edu/case-studies-and-white-papers/' },
    ],
    connections: [
      { title: 'Student Research Partnership', description: 'Collaborate with Wharton talent on real business questions.', url: 'https://ai-analytics.wharton.upenn.edu/for-industry/engagement-opportunities/student-research-partnership/' },
      { title: 'Penn GSE', description: 'Research and practice at the intersection of AI and learning.', url: 'https://www.gse.upenn.edu/our-expertise/penn-ai-pedagogy-initiative' },
      { title: 'Penn Medicine', description: 'AI innovation in clinical care, operations, and discovery.', url: 'https://www.med.upenn.edu/oe/ai-psom/' },
    ],
    success: 'You can identify the right use case, redesign the surrounding work, and scale measurable value with people and safeguards in view.', primary: { label: 'Explore professional learning', url: 'https://ai-analytics.wharton.upenn.edu/for-industry/professional-learning-hub/' },
  },
  {
    slug: 'senior-leadership', short: 'Senior Leadership', title: 'Govern & Multiply', phase: '04 / Stewardship', audience: 'Executives, board members, and enterprise leaders', color: '#b72f48',
    promise: 'Lead what AI changes—and what it must not.', question: 'How do I set direction, govern tradeoffs, and build an organization ready for sustained change?',
    role: 'A strategic force multiplier for foresight, enterprise intelligence, innovation, and allocation.', account: 'Set ambition and boundaries, challenge the evidence, assign ownership, and protect the people the system affects.',
    focus: [
      { title: 'Set the ambition', description: 'Connect AI investment to enterprise strategy, distinctive capabilities, and stakeholder value.' },
      { title: 'Govern the tradeoffs', description: 'Establish decision rights, accountability, oversight, and escalation before high-stakes deployment.' },
      { title: 'Shape the culture', description: 'Make responsible experimentation, continuous learning, and constructive challenge leadership expectations.' },
      { title: 'Multiply human judgment', description: 'Use technology to extend expertise while preserving the experience, empathy, and responsibility only people bring.' },
    ],
    proof: [
      { title: 'Wharton Accountable AI Lab', description: 'Research and practical frameworks for accountable AI development and deployment.', url: 'https://ai-analytics.wharton.upenn.edu/wharton-accountable-ai-lab/' },
      { title: 'Strategies for Accountable AI', description: 'Executive education for leading AI with governance, ethics, and performance aligned.', url: 'https://executiveeducation.wharton.upenn.edu/for-individuals/all-programs/strategies-for-accountable-ai/' },
      { title: 'Leadership Program in AI & Analytics', description: 'An online leadership pathway for enterprise-scale AI and analytics strategy.', url: 'https://executiveeducation.wharton.upenn.edu/online-learning/self-paced-online-programs/leadership-program-in-ai-and-analytics/' },
      { title: 'Faculty Research Partnership', description: 'Engage Wharton faculty around important organizational research questions.', url: 'https://ai-analytics.wharton.upenn.edu/for-industry/engagement-opportunities/faculty-research-partnership/' },
      { title: 'Wharton Human-AI Research', description: 'Research on how people and intelligent systems work, decide, and create together.', url: 'https://ai.wharton.upenn.edu/' },
      { title: 'Cases & White Papers', description: 'Decision-ready insight for leaders navigating AI adoption and accountability.', url: 'https://ai-analytics.wharton.upenn.edu/case-studies-and-white-papers/' },
    ],
    connections: [
      { title: 'Penn Carey Law', description: 'Law, policy, and governance for emerging technology.', url: 'https://www.law.upenn.edu/live/news/18278-forging-the-future-ai-at-penn-carey-law' },
      { title: 'Perelman School of Medicine', description: 'AI leadership in health, science, and clinical systems.', url: 'https://www.med.upenn.edu/oe/ai-psom/' },
      { title: 'Penn AI', description: 'A university-wide strategy for advancing AI responsibly.', url: 'https://www.upenn.edu/pennforward/penn-ai' },
    ],
    success: 'You can set enterprise direction, govern consequential choices, and ensure AI expands organizational judgment rather than obscuring it.', primary: { label: 'Explore industry engagement', url: 'https://ai-analytics.wharton.upenn.edu/for-industry/' },
  },
]

function External({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noreferrer" className={className}>{children}<ExternalLink size={15} aria-hidden="true" /></a>
}
function Local({ href, children, className = '', style, ariaCurrent }: { href: string; children: ReactNode; className?: string; style?: CSSProperties; ariaCurrent?: 'page' }) {
  return <a href={`#/${href}`} className={className} style={style} aria-current={ariaCurrent}>{children}</a>
}

function Header() {
  return <a className="skip-link" href="#main" onClick={(event) => { event.preventDefault(); const main = document.getElementById('main'); main?.setAttribute('tabindex', '-1'); main?.focus() }}>Skip to main content</a>
}

function SectionNav({ active }: { active?: string }) {
  const stageIcons = [GraduationCap, Sparkles, Building2, Compass]
  return <nav className="hero-nav-section" aria-label="Explore the AI learning journey">
    <div className="container hero-nav-grid">
      {stages.map((stage, index) => {
        const StageIcon = stageIcons[index]
        return <Local key={stage.slug} href={stage.slug} className={`hero-nav-card ${active === stage.slug ? 'active' : ''}`} style={{ '--stage': stage.color } as CSSProperties} ariaCurrent={active === stage.slug ? 'page' : undefined}>
          <StageIcon />
          <span><span className="hero-nav-title"><b>{stage.short}</b><ArrowRight /></span><small>{stage.title}</small></span>
        </Local>
      })}
    </div>
  </nav>
}

function HomePage() {
  return <>
    <main id="main">
      <section className="home-hero"><div className="container hero-grid">
        <div className="hero-copy"><img className="hero-logo" src={whartonReverseLogo} alt="The Wharton School" /><p className="eyebrow light">Teaching · Learning · Research</p><h1>Human judgment.<br /><em>Expanded by AI.</em></h1><p className="hero-deck">At Wharton, AI is not a shortcut around the work of learning. It is a powerful partner in it—helping people ask better questions, test ideas, make evidence-based decisions, and lead responsibly at every stage.</p><div className="button-row"><button className="button button-primary" onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}>Find your starting point <ArrowDown size={17} /></button><External href="https://ai-analytics.wharton.upenn.edu/" className="button button-light">Explore Wharton AI & Analytics</External></div></div>
      </div></section>
      <SectionNav />

      <section className="section" id="journey"><div className="container"><figure className="pathways-graphic"><img src={aiLearningPathways} alt="AI-powered learning for every stage: high school, undergraduate, graduate, doctoral, and executive and continuing learners." /></figure><div className="section-intro"><div><p className="eyebrow">Start where you are</p><h2>A lifelong journey with AI</h2></div><p>The tools may be shared. The learning goal is not. Wharton meets learners at the stage where AI can add the most value—while making clear what must remain theirs.</p></div><div className="journey-grid">{stages.map((stage, index) => <article className="journey-card" key={stage.slug} style={{ '--stage': stage.color } as CSSProperties}><span className="journey-index">0{index + 1}</span><p className="card-kicker">{stage.short}</p><h3>{stage.title}</h3><p>{stage.promise}</p><small>{stage.audience}</small><Local href={stage.slug} className="journey-action">Explore this stage <ArrowRight /></Local></article>)}</div></div></section>

      <section className="section philosophy-section" id="philosophy">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-lead"><p className="eyebrow light">The Wharton approach</p><h2>Capability grows.<br />Judgment leads.</h2><p>Wharton approaches AI as both a field of inquiry and a new way of working. Across every stage, the aim is not simply to produce more. It is to understand more, decide better, and create value responsibly.</p><External href="https://www.wharton.upenn.edu/the-wharton-way/elevate/analytics-pillar" className="text-link light-link">See AI & Analytics in The Wharton Way</External></div>
            <div className="principle-stack"><article><span>01</span><div><h3>Understand before you accelerate</h3><p>Strong foundations make AI useful. Learners build the logic, domain knowledge, and critical habits needed to recognize good work.</p></div></article><article><span>02</span><div><h3>Learn by doing</h3><p>Real problems expose the gaps between a plausible answer and a responsible decision. Experiential learning turns fluency into capability.</p></div></article><article><span>03</span><div><h3>Match accountability to the stakes</h3><p>As AI moves from practice to enterprise decisions, the need for human review, governance, and leadership grows with it.</p></div></article></div>
          </div>

        </div>
      </section>

      <section className="section section-white"><div className="container"><div className="section-intro"><div><p className="eyebrow">Wharton AI & Analytics</p><h2>Where research becomes impact</h2></div><p>The School's AI and analytics ecosystem connects ideas to application through four mutually reinforcing areas of focus.</p></div><div className="area-grid">
        <article className="area-card"><span>01</span><GraduationCap /><h3>Learning by doing</h3><p>Students build fluency through courses, tools, faculty guidance, and real-world work.</p><External href="https://ai-analytics.wharton.upenn.edu/for-students/" className="text-link">Student opportunities</External></article>
        <article className="area-card"><span>02</span><Lightbulb /><h3>Investing in the next big idea</h3><p>Wharton supports ambitious research where AI, analytics, and business meet.</p><External href="https://ai-analytics.wharton.upenn.edu/for-researchers/funded-research/" className="text-link">Funded research</External></article>
        <article className="area-card"><span>03</span><Building2 /><h3>Bringing academia to practice</h3><p>Industry engagement moves questions and evidence in both directions.</p><External href="https://ai-analytics.wharton.upenn.edu/for-industry/engagement-opportunities/" className="text-link">Engagement opportunities</External></article>
        <article className="area-card"><span>04</span><Globe2 /><h3>Harnessing AI for good</h3><p>Research and partnerships explore how technology can serve society.</p><External href="https://ai-analytics.wharton.upenn.edu/for-society/" className="text-link">AI for society</External></article>
      </div></div></section>

      <section className="section ecosystem-section" id="across-wharton"><div className="container"><div className="section-intro"><div><p className="eyebrow light">Across Wharton</p><h2>One school. Many ways in.</h2></div><p>Teaching, research, experimentation, and leadership development form a connected ecosystem—not a collection of isolated programs.</p></div><div className="ecosystem-grid">
        <div className="ecosystem-heading"><BookOpen /><span>Learn</span></div><div className="ecosystem-card"><h3>AI & Analytics Initiative</h3><p>The School-wide hub connecting students, faculty, industry, and society.</p><External href="https://ai-analytics.wharton.upenn.edu/" className="ecosystem-link">Visit the initiative</External></div>
        <div className="ecosystem-heading"><FlaskConical /><span>Experiment</span></div><div className="ecosystem-card"><h3>Generative AI Labs</h3><p>A collaborative home for teaching innovation and hands-on exploration.</p><External href="https://gail.wharton.upenn.edu/" className="ecosystem-link">Explore GAIL</External></div>
        <div className="ecosystem-heading"><BrainCircuit /><span>Research</span></div><div className="ecosystem-card"><h3>Wharton Human-AI Research</h3><p>Evidence on how people work, decide, and create with intelligent systems.</p><External href="https://ai.wharton.upenn.edu/" className="ecosystem-link">Explore the research</External></div>
        <div className="ecosystem-heading"><Compass /><span>Lead</span></div><div className="ecosystem-card"><h3>Executive Education</h3><p>Programs for professionals responsible for strategy, adoption, and governance.</p><External href="https://executiveeducation.wharton.upenn.edu/ai-and-analytics/" className="ecosystem-link">Explore executive learning</External></div>
      </div></div></section>

      <section className="section section-white"><div className="container featured-story"><div className="story-placeholder" aria-hidden="true"><div className="placeholder-grid" /><span>Partnership in practice</span></div><div className="story-copy"><p className="eyebrow">School + industry partnerships</p><h2>Better questions move in both directions.</h2><p>Organizations bring urgent, real-world challenges. Wharton brings research depth, student talent, and a culture of evidence. Together, they test ideas in context and create knowledge that travels.</p><div className="partner-link-grid"><External href="https://ai-analytics.wharton.upenn.edu/for-industry/engagement-opportunities/student-research-partnership/" className="partner-link"><Users />Student research partnership</External><External href="https://ai-analytics.wharton.upenn.edu/for-industry/engagement-opportunities/faculty-research-partnership/" className="partner-link"><FlaskConical />Faculty research partnership</External><External href="https://ai-analytics.wharton.upenn.edu/wharton-healthcare-analytics-lab/" className="partner-link"><Network />Healthcare Analytics Lab</External></div></div></div></section>

      <section className="section penn-section" id="penn"><div className="container"><div className="section-intro"><div><p className="eyebrow">Across Penn</p><h2>AI strengthened by many disciplines</h2></div><p>Wharton's business perspective is part of a university-wide ecosystem spanning technology, education, medicine, law, and society.</p></div><div className="penn-grid">
        <External href="https://ai.upenn.edu/" className="penn-card"><span>Penn</span><h3>Penn AI</h3><p>University-wide education, research, and innovation.</p><ChevronRight /></External><External href="https://ai.seas.upenn.edu/" className="penn-card"><span>Engineering</span><h3>AI at Penn Engineering</h3><p>Technical foundations and frontier research.</p><ChevronRight /></External><External href="https://www.gse.upenn.edu/our-expertise/penn-ai-pedagogy-initiative" className="penn-card"><span>Education</span><h3>Penn GSE</h3><p>AI, pedagogy, and the future of learning.</p><ChevronRight /></External><External href="https://www.med.upenn.edu/oe/ai-psom/" className="penn-card"><span>Medicine</span><h3>Perelman School</h3><p>AI across science, care, and operations.</p><ChevronRight /></External><External href="https://www.law.upenn.edu/live/news/18278-forging-the-future-ai-at-penn-carey-law" className="penn-card"><span>Law</span><h3>Penn Carey Law</h3><p>Governance, policy, and emerging technology.</p><ChevronRight /></External>
      </div></div></section>

      <section className="section research-section"><div className="container research-grid"><div><p className="eyebrow light">The research flywheel</p><h2>Research informs practice.<br />Practice sharpens research.</h2><p>Wharton connects discovery, learning, application, and evidence in a continuous cycle—so ideas are tested against the world they are intended to change.</p></div><div className="flywheel" aria-label="Discover, teach, apply, evaluate"><span><FlaskConical />Discover</span><ArrowRight /><span><BookOpen />Teach</span><ArrowRight /><span><Sparkles />Apply</span><ArrowRight /><span><Target />Evaluate</span></div></div></section>

      <section className="section insights-section"><div className="container"><div className="section-intro"><div><p className="eyebrow">Ideas in motion</p><h2>Research and insight</h2></div><p>Follow the questions Wharton faculty and practitioners are asking now.</p></div><div className="insight-grid"><External href="https://ai-analytics.wharton.upenn.edu/wharton-ai-analytics-insights/" className="insight-card"><span>Wharton AI & Analytics</span><h3>Insights for a rapidly changing field</h3><p>Research, commentary, and practical perspectives from across the initiative.</p><b>Read insights <ArrowRight /></b></External><External href="https://ai.wharton.upenn.edu/" className="insight-card"><span>Wharton Human-AI Research</span><h3>How people and AI work together</h3><p>Explore the evidence behind effective human–AI collaboration.</p><b>Explore research <ArrowRight /></b></External><External href="https://knowledge.wharton.upenn.edu/category/ai/" className="insight-card"><span>Knowledge at Wharton</span><h3>AI in business and society</h3><p>Faculty-informed analysis for global decision-makers.</p><b>Browse the topic <ArrowRight /></b></External></div></div></section>

      <section className="closing-section"><div className="container closing-grid"><div><p className="eyebrow light">Your next move</p><h2>Where are you in the journey?</h2><p>Choose the stage that best matches the decisions you are learning to make now.</p></div><div className="closing-links">{stages.map(stage => <Local key={stage.slug} href={stage.slug} style={{ '--stage': stage.color } as CSSProperties}><span>{stage.short}<small>{stage.title}</small></span><ArrowRight /></Local>)}</div></div></section>
    </main>
  </>
}

function StagePage({ stage }: { stage: Stage }) {
  const index = stages.findIndex(item => item.slug === stage.slug)
  const next = stages[(index + 1) % stages.length]
  return <main id="main" style={{ '--stage': stage.color } as CSSProperties}>
    <section className="stage-hero"><div className="container"><nav className="breadcrumbs" aria-label="Breadcrumb"><Local href="">AI at Wharton</Local><ChevronRight /> <span>{stage.short}</span></nav><div className="stage-hero-grid"><div><p className="stage-kicker">{stage.phase} · {stage.short}</p><h1>{stage.title}</h1><p className="stage-promise">{stage.promise}</p><blockquote>{stage.question}</blockquote><div className="button-row"><button className="button button-stage" onClick={() => document.getElementById('focus')?.scrollIntoView({ behavior: 'smooth' })}>Explore this stage <ArrowDown /></button><External href={stage.primary.url} className="button button-outline">{stage.primary.label}</External></div></div><aside className="stage-hero-panel"><p className="wire-label">At this stage</p><div><span>AI contributes</span><p>{stage.role}</p></div><div><span>You remain accountable</span><p>{stage.account}</p></div></aside></div></div></section>
    <SectionNav active={stage.slug} />

    <section className="section focus-section" id="focus"><div className="container"><div className="section-intro"><div><p className="eyebrow">What learning looks like</p><h2>Four capabilities to carry forward</h2></div><p>{stage.audience} use AI most effectively when technology expands—not replaces—their developing expertise.</p></div><div className="focus-grid">{stage.focus.map((item, i) => <article key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>

    <section className="section section-white"><div className="container"><div className="section-intro"><div><p className="eyebrow">At Wharton</p><h2>Put the philosophy into practice</h2></div><p>Explore live programs, research, tools, and learning experiences relevant to this point in the journey.</p></div><div className="proof-grid">{stage.proof.map(item => <External key={item.title} href={item.url} className="proof-card"><span>Wharton resource</span><h3>{item.title}</h3><p>{item.description}</p><b>Visit resource <ArrowRight /></b></External>)}</div></div></section>

    <section className="section stage-connections"><div className="container"><div className="section-intro"><div><p className="eyebrow light">Connected by design</p><h2>Go deeper across the ecosystem</h2></div><p>Wharton's approach gains depth through connections across the School, the University, and the world of practice.</p></div><div className="connection-grid">{stage.connections.map(item => <External key={item.title} href={item.url} className="connection-card"><Network /><span><h3>{item.title}</h3><p>{item.description}</p></span><ArrowRight /></External>)}</div></div></section>

    <section className="section success-section"><div className="container success-check"><div><p className="eyebrow">The measure that matters</p><h2>What success looks like</h2></div><p><Check />{stage.success}</p></div></section>

    <section className="stage-closing"><div className="container stage-closing-grid"><div><p className="eyebrow light">Continue exploring</p><h2>{stage.primary.label}</h2><External href={stage.primary.url} className="button button-white">Visit the official site</External></div><Local href={next.slug} className="next-journey" style={{ '--next-stage': next.color } as CSSProperties}><span>Next in the journey<small>{next.short}</small><b>{next.title}</b></span><ArrowRight /></Local></div></section>
  </main>
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><span>Wharton</span><p>AI at Wharton</p><small>A working content and experience prototype. Not an official Wharton website.</small></div><div><h2>Your journey</h2>{stages.map(s => <Local key={s.slug} href={s.slug}>{s.short}</Local>)}</div><div><h2>Explore</h2><External href="https://www.wharton.upenn.edu/">Wharton</External><External href="https://ai-analytics.wharton.upenn.edu/">AI & Analytics</External><External href="https://ai.upenn.edu/">Penn AI</External></div></div><div className="container footer-bottom"><span>Wireframe prototype · August 2026</span><External href="https://www.upenn.edu/index.php/about/privacy-policy">Privacy & legal</External></div></footer>
}

function App() {
  const getRoute = () => (window.location.hash.replace(/^#\/?/, '') || '').replace(/\?.*$/, '')
  const [route, setRoute] = useState(getRoute)
  useEffect(() => { const change = () => { setRoute(getRoute()); window.scrollTo({ top: 0, behavior: 'auto' }) }; window.addEventListener('hashchange', change); return () => window.removeEventListener('hashchange', change) }, [])
  const stage = stages.find(item => item.slug === route)
  return <div className="app-shell"><Header />{route === '' ? <HomePage /> : stage ? <StagePage stage={stage} /> : <main id="main" className="not-found"><h1>Page not found</h1><p>This route is not part of the prototype.</p><Local href="" className="button button-primary">Return to AI at Wharton</Local></main>}<Footer /></div>
}

export default App
