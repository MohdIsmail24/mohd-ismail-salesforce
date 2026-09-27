(function(){
const root=document.getElementById('projectDetail');
const id=new URLSearchParams(location.search).get('id')||'lead-management';
const p=projects[id]||projects['lead-management'];
const images=p.images||[];
const completed=p.class==='completed';

const detail={
  'lead-management':{goal:'Manage and qualify leads in a clean CRM workspace.',configured:['Lead list view and ownership','Lead Status and Lead Source visibility','Owner = Me and Created = This Quarter filters','Lead conversion tracking','Account linking'],outcome:'A clean, organized lead workspace that helps sales teams quickly identify and prioritize prospects based on status, source and engagement timing.'},
  'opportunity-pipeline':{goal:'Track sales opportunities from active stages through closed outcomes.',configured:['Opportunity records and list views','Pipeline stages and sales ownership','Account and contact linkage','Close-date forecasting','Opportunity amount tracking'],outcome:'A transparent opportunity pipeline that gives sales teams and management a clear view of deals in progress and expected revenue by close period.'},
  'global-sales-dashboard':{goal:'Turn opportunity and sales data into a management-friendly dashboard.',configured:['Sales Pipeline by close date','Opportunities Won view','Total Open Opportunities and value','Win-rate summary','Revenue by stage'],outcome:'A high-level dashboard that brings sales performance into focus for leadership, enabling quick decisions about pipeline health and forecast accuracy.'},
  'agentforce-support':{goal:'Build a support-focused Agentforce experience that can route, verify, answer and escalate.',configured:['Agent Router subagent','Service Customer Verification subagent','FAQ Resolution subagent','Escalation and case creation logic','Multi-intent routing'],outcome:'A support agent that combines AI routing with human-verified customer access and self-service, reducing repetitive work while ensuring sensitive requests get escalated appropriately.'},
  'sales-rep-win-rates':{goal:'Measure opportunity performance by sales representative.',configured:['Opportunity report grouped by Owner','Close Date grouping','Summary metrics and grand totals','Visual win-rate chart','Rep-to-rep comparison'],outcome:'A performance report that lets managers see which reps are closing deals fastest and with the highest win rates, supporting coaching and resource decisions.'},
  'big-deals-dashboard':{goal:'Make high-value opportunity stages easy to scan.',configured:['Opportunities in Stages component','Pipeline stage distribution','Opportunity record count','High-value deal highlighting','Dashboard readability'],outcome:'A focused dashboard that lets leadership instantly see the shape of the pipeline and spot where deals are concentrated, supporting deal-review conversations.'},
  'football-scout-crm':{goal:'Manage football scouting operations with a structured CRM for players, scouts, matches, video and scouting reports.',configured:['5 custom Salesforce objects (Player, Match, Scout, Video Clip, Scouting Report)','8 lookup relationships linking scouts, players and matches','5 validation rules enforcing rating ranges and review controls','5 record-triggered Flows for automation','Football Scout Operations dashboard','7 operational and AI-quality reports','Permission Set with least-privilege security','Human-in-the-loop video review workflow'],outcome:'A complete scouting operations platform that centralizes player data, match coverage, video evidence and assessments while enforcing data quality and security through automation and role-based access.'},
  'security-model':{goal:'Design a scalable access model for multiple departments.',configured:['Role hierarchy design','Profiles and Permission Sets','Organization-Wide Defaults (OWD)','Sharing Rules and Manual Sharing','Field-level security'],outcome:'A documented, scalable security architecture that ensures each team sees only the data they need, following the principle of least privilege.'},
  'service-cloud':{goal:'Build a structured case-management workflow for customer support.',configured:['Case lifecycle design','Queues and assignment','Escalation workflow','Customer-support routing','Auto-response configuration'],outcome:'A support workflow that moves cases from intake through resolution with clear escalation paths and queue-based team assignment.'},
  'flow-automation':{goal:'Automate repetitive business processes with Salesforce Flow.',configured:['Record-triggered Flow design','Screen Flow design','Approval steps','Notifications and business logic','Bulk record updates'],outcome:'A suite of automations that handle repetitive tasks and guide users through business processes, reducing manual work and improving consistency.'}
};

const extra={
 'lead-management':{approach:'I organized the Leads workspace around ownership, qualification status, source and time-based filtering so a sales user can quickly identify the records that need attention today.',concepts:'Lead object • List views • Filtering • Ownership • CRM data organization'},
 'opportunity-pipeline':{approach:'I used the Opportunity object and stage information to make pipeline records easy to review by account, owner and expected close date.',concepts:'Opportunity object • Pipeline stages • Forecasting • Sales methodology'},
 'global-sales-dashboard':{approach:'I combined source report data into dashboard components so leadership can move from detailed records to high-level pipeline and performance indicators.',concepts:'Dashboard design • Report-to-dashboard integration • Executive visibility • KPI selection'},
 'agentforce-support':{approach:'The agent routes the request, verifies the customer when required, answers supported FAQs and provides an escalation path when the request should move to a human.',concepts:'Agentforce Builder • Intent routing • Verification workflows • Escalation logic • AI-assisted support'},
 'sales-rep-win-rates':{approach:'I grouped opportunity results by owner and close date, then used summaries and a chart to make rep-level performance easier to compare.',concepts:'Report Builder • Grouping and summaries • Chart visualization • Performance metrics'},
 'big-deals-dashboard':{approach:'I focused the dashboard on opportunity-stage distribution so a manager can immediately see how records are spread across the sales cycle.',concepts:'Dashboard components • Stage analysis • Visual hierarchy • Leadership dashboarding'},
 'football-scout-crm':{approach:'I built this project around the complete scouting workflow: capturing player data, assigning scouts, recording matches, gathering video evidence, and creating assessments. The data model uses lookups to link scouts to players and matches, Flows automate scout assignment and high-potential alerts, validation rules ensure rating consistency, and a permission set enforces least-privilege security for different roles.',concepts:'Custom objects • Lookup relationships • Record-triggered Flows • Validation rules • Dashboards & reports • Permission Sets • Security model • Sports data operations'},
 'security-model':{approach:'The planned model starts with least privilege, then layers organization-wide defaults, role hierarchy, permission sets and sharing rules to provide only the access each team needs.',concepts:'Role hierarchy • OWD settings • Permission Sets • Sharing rules • Field-level security • Administration'},
 'service-cloud':{approach:'The planned workflow follows a case from intake through assignment and escalation, with queues used to route work to the appropriate support team.',concepts:'Cases • Queues • Assignment • Escalation • Service workflows • Support automation'},
 'flow-automation':{approach:'The planned automation uses record-triggered and screen flows for repeatable business actions, with approvals and notifications where human control is required.',concepts:'Record-triggered Flows • Screen Flows • Approvals • Notifications • Process automation'}
};
const x=extra[id]||extra['lead-management'];

const d=detail[id]||detail['lead-management'];

root.innerHTML=`
<section class="project-hero card">
  <div class="project-hero-copy">
    <span class="kicker">PROJECT ${p.num}</span>
    <div class="detail-title-row"><h1>${p.title}</h1><span class="badge ${completed?'completed':'progress-badge'}">${p.status}</span></div>
    <p class="project-summary"><b>Purpose:</b> ${d.goal}</p>
    <p>${p.summary}</p>
    <div class="chips">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
  </div>
  <div class="detail-orb">${completed?'☁':'◌'}<small>${completed?'SALESFORCE ORG EVIDENCE':'BUILD IN PROGRESS'}</small></div>
</section>

<section class="detail-grid">
  <div class="card detail-main">
    <div class="section-head"><div><span class="kicker">PROJECT BREAKDOWN</span><h2>What I configured</h2></div></div>
    <div class="detail-points">${d.configured.map(x=>`<div class="detail-point"><span>✓</span><p>${x}</p></div>`).join('')}</div>
    <div class="detail-explain-grid"><div class="detail-explain"><span class="kicker">IMPLEMENTATION APPROACH</span><p>${x.approach}</p></div><div class="detail-explain"><span class="kicker">ADMIN CONCEPTS</span><p>${x.concepts}</p></div></div>
    <div class="detail-outcome"><span class="kicker">BUSINESS VALUE</span><p>${d.outcome}</p></div>

    <div class="section-head evidence-heading"><div><span class="kicker">VISUAL EVIDENCE</span><h2>${images.length?'Salesforce screenshots':'Project roadmap'}</h2></div></div>
    ${images.length?`<div class="gallery">${images.map((src,i)=>`<figure class="clickable-shot"><img class="project-screenshot" src="${src}" alt="${p.title} screenshot ${i+1}"><figcaption>Salesforce ${p.title}</figcaption></figure>`).join('')}</div>`:`<div class="detail-points"><div class="detail-point"><span>📋</span><p>Screenshots will be added when development is complete and verified in the Salesforce org.</p></div></div>`}
  </div>

  <aside class="card detail-side">
    <div class="section-head"><div><span class="kicker">RECRUITER VIEW</span><h2>Key evidence</h2></div></div>
    <ul>${p.evidence.map(x=>`<li>✓ ${x}</li>`).join('')}</ul>
    <div class="detail-note"><b>How I would explain it</b><p>${p.notes}</p></div>
    <a class="btn primary full" href="index.html#projects">← View all projects</a>
  </aside>
</section>`;


// Full-size screenshot viewer: each project image opens independently for clear inspection.
document.querySelectorAll('.project-screenshot').forEach(img=>{
  img.addEventListener('click',()=>{
    const overlay=document.createElement('div');
    overlay.className='image-lightbox';
    overlay.innerHTML=`<button class="lightbox-close" aria-label="Close image">×</button><img src="${img.src}" alt="${img.alt}"><div class="lightbox-caption">${p.title} · Full-size Salesforce screenshot</div>`;
    document.body.appendChild(overlay);
    document.body.classList.add('lightbox-open');
    const close=()=>{overlay.remove();document.body.classList.remove('lightbox-open')};
    overlay.addEventListener('click',e=>{if(e.target===overlay||e.target.classList.contains('lightbox-close'))close()});
    document.addEventListener('keydown',function esc(e){if(e.key==='Escape'){close();document.removeEventListener('keydown',esc)}});
  });
});

document.title=p.title+' | Mohd Ismail — Salesforce Admin Lab';
})();
