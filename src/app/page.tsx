export default function Home() {
  return (
    <main style={{
      background:"#0a0a0a",
      color:"white",
      fontFamily:"sans-serif",
      lineHeight:"1.6"
    }}>

{/* HERO SECTION */}

<section style={{
padding:"120px 20px",
textAlign:"center"
}}>

<h1 style={{fontSize:"60px",marginBottom:"20px"}}>
Arjun Bhattacharya
</h1>

<p style={{fontSize:"22px",opacity:0.8}}>
Supply Chain & Operations Leader
</p>

<p style={{maxWidth:"700px",margin:"30px auto",opacity:0.7}}>
11+ years of experience driving end-to-end supply chain optimization across retail and 
e-commerce ecosystems including Reliance Retail, Myntra, Flipkart and Chai Point.
</p>

</section>

{/* ABOUT */}

<section style={{padding:"80px 20px",maxWidth:"1000px",margin:"auto"}}>

<h2 style={{fontSize:"36px",marginBottom:"20px"}}>About</h2>

<p>
Supply Chain & Operations Leader with deep expertise in reverse logistics governance,
inventory optimization, demand planning, SLA management and control tower operations.
Over the last decade I have delivered multi-crore working capital impact, improved supply
chain visibility and scaled nationwide retail and e-commerce operations through
data-driven decision making and cross-functional leadership.
</p>

</section>

{/* SKILLS */}

<section style={{padding:"80px 20px",background:"#111"}}>

<h2 style={{textAlign:"center",fontSize:"36px",marginBottom:"40px"}}>Core Competencies</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"20px",
maxWidth:"1100px",
margin:"auto"
}}>

<div>Supply Chain Management</div>
<div>Demand Planning & Forecasting</div>
<div>Inventory Optimization</div>
<div>Reverse Logistics Governance</div>
<div>Warehouse & Distribution Operations</div>
<div>Vendor Performance Management (OTIF)</div>
<div>Control Tower Operations</div>
<div>SAP & ERP Systems</div>
<div>Data Analytics (Tableau / Excel)</div>
<div>Lean Process Improvement</div>

</div>

</section>

{/* EXPERIENCE */}

<section style={{padding:"80px 20px",maxWidth:"1100px",margin:"auto"}}>

<h2 style={{fontSize:"36px",marginBottom:"40px"}}>Professional Experience</h2>

<div style={{marginBottom:"40px"}}>
<h3>Reliance Retail – Manager, Control Tower (Ajio)</h3>
<p>Nov 2021 – Present</p>
<ul>
<li>Reduced return pendency by 50% within 4 months.</li>
<li>Cut reverse logistics leakages by 40% through governance frameworks.</li>
<li>Improved vendor delivery success from 85% to 94%.</li>
<li>Enhanced return-to-vendor performance from 86% to 97%.</li>
</ul>
</div>

<div style={{marginBottom:"40px"}}>
<h3>Reliance Retail – Manager, Supply Chain Growth (Shein)</h3>
<ul>
<li>Reduced logistics leakages by 45%.</li>
<li>Enabled 200% business growth by scaling supply chain readiness.</li>
<li>Expanded vendor coverage and increased sellable SKUs by 35%.</li>
<li>Improved SLA adherence from 85% to 97%.</li>
</ul>
</div>

<div style={{marginBottom:"40px"}}>
<h3>Myntra & Flipkart – Associate Manager</h3>
<p>Jul 2019 – Nov 2021</p>
<ul>
<li>Reduced reverse operations leakages by 60%.</li>
<li>Improved GRN compliance from 83% to 98%.</li>
<li>Released ₹11 Cr shipments against AOP targets.</li>
</ul>
</div>

<div style={{marginBottom:"40px"}}>
<h3>Chai Point – Deputy Manager Supply Chain Planning</h3>
<p>Aug 2018 – Jul 2019</p>
<ul>
<li>Reduced procurement cost by 20%.</li>
<li>Lowered inventory days from 60 to 28.</li>
<li>Unlocked ₹2.9 Cr in holding cost savings.</li>
</ul>
</div>

</section>

{/* EDUCATION */}

<section style={{padding:"80px 20px",background:"#111"}}>

<h2 style={{textAlign:"center",fontSize:"36px",marginBottom:"40px"}}>Education</h2>

<div style={{maxWidth:"800px",margin:"auto"}}>

<p><b>PGP in Business</b> – SDA Bocconi Asia Center</p>
<p><b>Diploma in International Business</b> – SDA Bocconi, Milan</p>
<p><b>B.E.</b> – Bangalore Institute of Technology</p>

</div>

</section>

{/* TECHNICAL */}

<section style={{padding:"80px 20px",maxWidth:"1000px",margin:"auto"}}>

<h2 style={{fontSize:"36px",marginBottom:"20px"}}>Technical Skills</h2>

<ul>
<li>SAP & ERP Systems</li>
<li>Power BI, Tableau</li>
<li>Advanced MS Excel</li>
<li>SQL (Working knowledge)</li>
<li>Python & R (Basic)</li>
<li>Lean Six Sigma</li>
</ul>

</section>

{/* CONTACT */}

<section style={{
padding:"100px 20px",
textAlign:"center",
background:"#111"
}}>

<h2 style={{fontSize:"36px"}}>Contact</h2>

<p style={{marginTop:"20px"}}>arjun.bhattacharya@outlook.com</p>
<p>+91-8826960707</p>

<p style={{marginTop:"20px"}}>
LinkedIn:  
<br/>
https://www.linkedin.com/in/arjun-bhattacharya-80561867/
</p>

</section>

<footer style={{textAlign:"center",padding:"30px",opacity:0.6}}>
© 2026 Arjun Bhattacharya
</footer>

</main>
  )
}