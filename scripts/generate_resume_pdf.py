import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable
)

def create_resume(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=40,
        rightMargin=40,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'HeaderTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        alignment=1, # Center
        textColor=colors.HexColor('#111827'),
        spaceAfter=4
    )
    
    sub_info_style = ParagraphStyle(
        'SubInfo',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        alignment=1,
        textColor=colors.HexColor('#374151'),
        spaceAfter=2
    )

    links_style = ParagraphStyle(
        'LinksStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#2563EB')
    )

    role_title_style = ParagraphStyle(
        'RoleTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=17,
        alignment=1,
        textColor=colors.HexColor('#111827'),
        spaceBefore=6,
        spaceAfter=6
    )

    summary_style = ParagraphStyle(
        'Summary',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        textColor=colors.HexColor('#374151'),
        alignment=4, # Justified
        spaceAfter=8
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=15,
        alignment=1,
        textColor=colors.HexColor('#111827'),
        spaceBefore=8,
        spaceAfter=6
    )

    job_title_style = ParagraphStyle(
        'JobTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        textColor=colors.HexColor('#111827')
    )

    job_date_style = ParagraphStyle(
        'JobDate',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        alignment=2, # Right
        textColor=colors.HexColor('#111827')
    )

    company_style = ParagraphStyle(
        'Company',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#4B5563'),
        spaceAfter=3
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#374151'),
        leftIndent=14,
        firstLineIndent=-10,
        spaceAfter=3
    )

    skill_col_style = ParagraphStyle(
        'SkillCol',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13.5,
        textColor=colors.HexColor('#374151')
    )

    story = []

    # ================= PAGE 1 =================
    # Header Name
    story.append(Paragraph("MUNAWAR ALI M", title_style))
    story.append(Paragraph("+918590410990 &nbsp;|&nbsp; munawaralimangat@gmail.com &nbsp;|&nbsp; Thenhipalam, Malappuram, Kerala, India", sub_info_style))

    # Social links row
    links_data = [[
        Paragraph('<a href="https://github.com/munawaralimangat"><font color="#2563EB"><u>GitHub</u></font></a>', ParagraphStyle('L', parent=links_style, alignment=0)),
        Paragraph('<a href="https://munawar-portfolio-v2.netlify.app/"><font color="#2563EB"><u>Portfolio</u></font></a>', ParagraphStyle('C', parent=links_style, alignment=1)),
        Paragraph('<a href="https://linkedin.com/in/munawar-ali-mangat"><font color="#2563EB"><u>LinkedIn</u></font></a>', ParagraphStyle('R', parent=links_style, alignment=2))
    ]]
    t_links = Table(links_data, colWidths=[175, 180, 175])
    t_links.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_links)
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#9CA3AF'), spaceBefore=4, spaceAfter=6))

    # Software Developer Headline
    story.append(Paragraph("Software Developer | MERN | Angular", role_title_style))
    story.append(Paragraph(
        "Results-driven software developer with expertise in MERN and Angular stacks. Passionate about building scalable web applications and collaborating with teams to develop impactful solutions. Strong problem-solving skills with hands-on experience in full-stack development, cloud deployment, and UI/UX optimization.",
        summary_style
    ))
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#9CA3AF'), spaceBefore=4, spaceAfter=6))

    # SKILLS AND EXPERTISE
    story.append(Paragraph("SKILLS AND EXPERTISE", section_heading))
    
    col1 = """<b>Frontend & State:</b><br/>• Angular & Angular Material<br/>• React.js & Material UI<br/>• TypeScript & JavaScript<br/>• RxJS & NgRx<br/>• Redux & Redux Toolkit<br/>• Tailwind CSS, CSS3, HTML5"""
    col2 = """<b>Backend, DB & Cloud:</b><br/>• Node.js & Express.js<br/>• MongoDB<br/>• RESTful APIs Integration<br/>• JWT Authentication<br/>• AWS (EC2) Deployment<br/>• npm, Postman"""
    col3 = """<b>AI & Developer Tools:</b><br/>• Claude Code (Anthropic)<br/>• OpenAI Codex & ChatGPT<br/>• Google Gemini<br/>• Git & GitHub<br/>• VS Code<br/>• Figma (UI/UX)"""

    skills_table = Table([
        [Paragraph(col1, skill_col_style), Paragraph(col2, skill_col_style), Paragraph(col3, skill_col_style)]
    ], colWidths=[175, 175, 180])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(skills_table)
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#9CA3AF'), spaceBefore=3, spaceAfter=5))

    # PROFESSIONAL EXPERIENCE
    story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_heading))

    # Job 1: Emdot Mincetech
    j1_header = Table([
        [Paragraph("Software Developer", job_title_style), Paragraph("2024 - Present", job_date_style)]
    ], colWidths=[350, 180])
    j1_header.setStyle(TableStyle([('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(j1_header)
    story.append(Paragraph("Emdot Mincetech | Calicut", company_style))

    j1_bullets = [
        "Developing core modules for Embase Prosuit (Enterprise College Management SaaS) using Angular, TypeScript, and RxJS.",
        "Collaborating with the backend team to integrate RESTful APIs and ensure smooth, reactive data flow.",
        "Implementing responsive UI components with Angular Material and Tailwind CSS for optimized user experience.",
        "Writing clean, modular, and maintainable code following best practices in Angular enterprise development.",
        "Debugging and resolving complex state management, template type-checking, and performance bottlenecks.",
        "Participating in code reviews, daily stand-ups, and sprint planning to ensure timely milestone delivery."
    ]
    for b in j1_bullets:
        story.append(Paragraph(f"• &nbsp; {b}", bullet_style))

    story.append(Spacer(1, 5))

    # Job 2: Selfstack
    j2_header = Table([
        [Paragraph("Fullstack Developer", job_title_style), Paragraph("2023 - 2024", job_date_style)]
    ], colWidths=[350, 180])
    j2_header.setStyle(TableStyle([('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(j2_header)
    story.append(Paragraph("Selfstack | Calicut", company_style))

    j2_bullets = [
        "Developed proficiency across the MERN stack (MongoDB, Express.js, React.js, Node.js) for end-to-end web applications.",
        "Built and deployed scalable full-stack projects featuring user authentication, database modeling, and RESTful APIs.",
        "Led the development of full-featured web applications, managing UI design, payment integration, and inventory management.",
        "Strengthened problem-solving capabilities and agile software development lifecycle methodologies."
    ]
    for b in j2_bullets:
        story.append(Paragraph(f"• &nbsp; {b}", bullet_style))

    # ================= PAGE 2 =================
    story.append(PageBreak())

    # PROJECTS Heading
    story.append(Paragraph("PROJECTS & ENTERPRISE WORK", section_heading))

    # Project 1: Embase Prosuit — Examination & Academic Workflow
    p1_header = Table([
        [Paragraph("<b>Embase Prosuit - Examination & Academic Workflow</b>", job_title_style), 
         Paragraph("Enterprise SaaS | Angular", job_date_style)]
    ], colWidths=[350, 180])
    p1_header.setStyle(TableStyle([('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(p1_header)
    story.append(Paragraph("College Management SaaS Application (Emdot Mincetech)", company_style))
    story.append(Paragraph(
        "Engineered examination and academic management modules for higher education institutions. Implemented complex multi-step workflows with draft persistence, validation, status-based navigation, examination applications, and revaluation handling.",
        summary_style
    ))
    p1_bullets = [
        "Built reactive forms with robust HttpClient API integrations, error boundaries, and strongly typed TypeScript models.",
        "Implemented role-based permission views and seamless state management utilizing RxJS observables."
    ]
    for b in p1_bullets:
        story.append(Paragraph(f"• &nbsp; {b}", bullet_style))

    story.append(Spacer(1, 4))

    # Project 2: Embase Prosuit — Finance, Fee & Hostel Operations
    p2_header = Table([
        [Paragraph("<b>Embase Prosuit - Finance & Operations Portal</b>", job_title_style), 
         Paragraph("Enterprise SaaS | Angular", job_date_style)]
    ], colWidths=[350, 180])
    p2_header.setStyle(TableStyle([('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(p2_header)
    story.append(Paragraph("Administrative Financials & Analytics Engine", company_style))
    story.append(Paragraph(
        "Built financial input interfaces, fee management workflows, and hostel mess calculation engines. Implemented advanced data tables featuring dynamic search, filtering, sorting, pagination, bulk actions, and structured report exports.",
        summary_style
    ))
    p2_bullets = [
        "Integrated ApexCharts visual metrics reporting for administrative insight dashboards.",
        "Streamlined high-volume operational data entry for administrative staff with high responsiveness."
    ]
    for b in p2_bullets:
        story.append(Paragraph(f"• &nbsp; {b}", bullet_style))

    story.append(Spacer(1, 4))

    # Project 3: BicycleRepublic
    p3_header = Table([
        [Paragraph("<u>BicycleRepublic</u> - E-Commerce Web App", ParagraphStyle('P3', parent=job_title_style, textColor=colors.HexColor('#2563EB'))), 
         Paragraph("GitHub-Repository: <a href='https://github.com/munawaralimangat'><font color='#2563EB'><u>Link</u></font></a>", job_date_style)]
    ], colWidths=[350, 180])
    p3_header.setStyle(TableStyle([('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(p3_header)
    story.append(Paragraph("Fullstack E-Commerce Application | Node.js, Express, MongoDB, Tailwind CSS", company_style))
    story.append(Paragraph(
        "Developed a comprehensive e-commerce website specializing in bicycles. Implemented both admin and client sides using Node.js, Express, MongoDB, and JWT authentication with search/filtering capabilities.",
        summary_style
    ))

    story.append(Spacer(1, 4))

    # Project 4: ASocialHub
    p4_header = Table([
        [Paragraph("<u>ASocialHub</u> - Backend Social Application", ParagraphStyle('P4', parent=job_title_style, textColor=colors.HexColor('#2563EB'))), 
         Paragraph("GitHub-Repository: <a href='https://github.com/munawaralimangat'><font color='#2563EB'><u>Link</u></font></a>", job_date_style)]
    ], colWidths=[350, 180])
    p4_header.setStyle(TableStyle([('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(p4_header)
    story.append(Paragraph("Backend REST API & Services | Node.js, Express, MongoDB, JWT", company_style))
    story.append(Paragraph(
        "Architected and developed the backend REST API services for a social networking platform. Built JWT-secured user authentication and authorization, post creation and interaction endpoints, and optimized MongoDB schema models.",
        summary_style
    ))

    story.append(Spacer(1, 3))
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#9CA3AF'), spaceBefore=3, spaceAfter=5))

    # EDUCATION
    story.append(Paragraph("EDUCATION", section_heading))
    story.append(Paragraph("<b>Bachelor of Commerce (B.Com)</b>", job_title_style))
    story.append(Paragraph("Calicut University, Thenhipalam, Kerala", company_style))
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#9CA3AF'), spaceBefore=4, spaceAfter=5))

    # Declaration
    story.append(Paragraph("<b>Declaration</b>", job_title_style))
    story.append(Paragraph("I hereby declare that the above furnished details are true to the best of my knowledge and belief.", summary_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph("<b>MUNAWAR ALI M</b>", ParagraphStyle('Sign', parent=job_title_style, alignment=2)))

    doc.build(story)
    print(f"Successfully generated PDF at: {output_path}")

if __name__ == "__main__":
    out1 = os.path.abspath("public/Munawar_Ali_Resume.pdf")
    out2 = os.path.abspath("public/resume.pdf")
    create_resume(out1)
    create_resume(out2)
