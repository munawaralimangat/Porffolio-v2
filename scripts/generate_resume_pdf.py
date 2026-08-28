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
    story.append(Paragraph("+918590410990 &nbsp;·&nbsp; munawaralimangat@gmail.com &nbsp;·&nbsp; Thenhipalam, Malappuram, Kerala, India", sub_info_style))

    # Social links row
    links_data = [[
        Paragraph('<a href="https://github.com/munawaralimangat"><font color="#2563EB"><u>GitHub</u></font></a>', ParagraphStyle('L', parent=links_style, alignment=0)),
        Paragraph('<font color="#2563EB"><u>Portfolio</u></font>', ParagraphStyle('C', parent=links_style, alignment=1)),
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
    
    col1 = """• ReactJs<br/>• MaterialUI<br/>• JavaScript<br/>• Redux and Redux Toolkit<br/>• Figma<br/>• HTML"""
    col2 = """• Angular<br/>• Angular Material<br/>• TypeScript<br/>• NgRx<br/>• JWT<br/>• CSS and SCSS"""
    col3 = """• NodeJs<br/>• MongoDB<br/>• AWS for cloud deployment<br/>• EC2, npm<br/>• RESTful APIs<br/>• TailwindCss"""

    skills_table = Table([
        [Paragraph(col1, skill_col_style), Paragraph(col2, skill_col_style), Paragraph(col3, skill_col_style)]
    ], colWidths=[175, 175, 180])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(skills_table)
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#9CA3AF'), spaceBefore=4, spaceAfter=6))

    # PROFESSIONAL EXPERIENCE
    story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_heading))

    # Job 1
    j1_header = Table([
        [Paragraph("Junior Software Developer", job_title_style), Paragraph("2024 - Present", job_date_style)]
    ], colWidths=[350, 180])
    j1_header.setStyle(TableStyle([('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(j1_header)
    story.append(Paragraph("Emdot Mincetech | Calicut", company_style))

    j1_bullets = [
        "Developing a College Management Application using Angular as part of a 5-member frontend team.",
        "Collaborating with the backend team to integrate APIs and ensure smooth data flow.",
        "Implementing responsive UI components and optimizing performance for a seamless user experience.",
        "Writing clean, modular, and maintainable code following best practices in Angular development.",
        "Debugging and fixing issues to enhance the application's stability and performance.",
        "Working with state management techniques and integrating third-party libraries to improve functionality.",
        "Participating in code reviews, daily stand-ups, and sprint planning to ensure project progress and alignment with business goals."
    ]
    for b in j1_bullets:
        story.append(Paragraph(f"• &nbsp; {b}", bullet_style))

    story.append(Spacer(1, 6))

    # Job 2
    j2_header = Table([
        [Paragraph("Fullstack Developer", job_title_style), Paragraph("2023 - 2024", job_date_style)]
    ], colWidths=[350, 180])
    j2_header.setStyle(TableStyle([('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(j2_header)
    story.append(Paragraph("Selfstack | Calicut", company_style))

    j2_bullets = [
        "Developed proficiency in the MERN (MongoDB, Express.js, React.js, Node.js) stack for full-stack web development.",
        "Completed multiple mini projects to reinforce learning and showcase skills in CRUD operations and complex web applications.",
        "Led the development of an eCommerce website, overseeing user interface design, payment gateway integration, and product inventory management.",
        "Enhanced problem-solving abilities and gained practical insights into the software development lifecycle through hands-on project work and collaboration."
    ]
    for b in j2_bullets:
        story.append(Paragraph(f"• &nbsp; {b}", bullet_style))

    # ================= PAGE 2 =================
    story.append(PageBreak())

    # PROJECTS Heading
    story.append(Paragraph("PROJECTS", section_heading))

    # Project 1: BicycleRepublic
    p1_header = Table([
        [Paragraph("<u>BicycleRepublic</u>", ParagraphStyle('P1', parent=job_title_style, textColor=colors.HexColor('#2563EB'))), 
         Paragraph("GitHub-Repository: <a href='https://github.com/munawaralimangat'><font color='#2563EB'><u>Link</u></font></a>", job_date_style)]
    ], colWidths=[350, 180])
    p1_header.setStyle(TableStyle([('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(p1_header)
    story.append(Paragraph("E-Commerce Application", company_style))
    story.append(Paragraph(
        "Developed a comprehensive e-commerce website specializing in bicycles, featuring two distinct categories: Mountain bikes and Road bikes. Designed and implemented both the admin and client sides using Node.js, Express, MongoDB, and JWT for authentication. Employed EJS and Tailwind CSS for frontend development.",
        summary_style
    ))

    p1_bullets = [
        "Implemented user authentication using JWT for secure access.",
        "Utilized MongoDB for efficient data storage and retrieval.",
        "Developed RESTful APIs with Express for seamless communication between client and server.",
        "Integrated Chart.js for analytics on the admin side.",
        "Admin functionalities include adding, updating, and deleting products, as well as managing categories and user blocking.",
        "Implemented search functionality, filtering options by price and category, and sorting capabilities for users to efficiently find and navigate products."
    ]
    for b in p1_bullets:
        story.append(Paragraph(f"• &nbsp; {b}", bullet_style))

    story.append(Spacer(1, 6))

    # Project 2: ASocialHub
    p2_header = Table([
        [Paragraph("<u>ASocialHub</u>", ParagraphStyle('P2', parent=job_title_style, textColor=colors.HexColor('#2563EB'))), 
         Paragraph("GitHub-Repository: <a href='https://github.com/munawaralimangat'><font color='#2563EB'><u>Link</u></font></a>", job_date_style)]
    ], colWidths=[350, 180])
    p2_header.setStyle(TableStyle([('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
    story.append(p2_header)
    story.append(Paragraph("Social Media Application", company_style))
    story.append(Paragraph(
        "Developed ASocialHub, a MERN stack-powered social app facilitating seamless user connections with secure JWT authentication. Leveraging an intuitive React front end and efficient MongoDB data storage, the platform prioritizes simplicity, fostering interactions through posts and engagement. Implemented secure JWT authentication for user login and authorization, ensuring robust security.",
        summary_style
    ))

    p2_bullets = [
        "Leveraged React for an intuitive front end and MongoDB for efficient data storage.",
        "Focused on simplicity, fostering user engagement through posts and interactions."
    ]
    for b in p2_bullets:
        story.append(Paragraph(f"• &nbsp; {b}", bullet_style))

    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#9CA3AF'), spaceBefore=4, spaceAfter=6))

    # MINI PROJECTS
    story.append(Paragraph("MINI PROJECTS", section_heading))

    mini_data = [
        [Paragraph("<b>CartApp</b><br/><font color='#4B5563'>Cart Application-Angular</font>", skill_col_style),
         Paragraph("GitHub-Repository: <a href='https://github.com/munawaralimangat'><font color='#2563EB'><u>Link</u></font></a>", job_date_style)],
        [Paragraph("<b>QRCode-Generator-App</b><br/><font color='#4B5563'>QR code scanner Application-React</font>", skill_col_style),
         Paragraph("GitHub-Repository: <a href='https://github.com/munawaralimangat'><font color='#2563EB'><u>Link</u></font></a>", job_date_style)],
        [Paragraph("<b>Calender App</b><br/><font color='#4B5563'>Calender Application</font>", skill_col_style),
         Paragraph("GitHub-Repository: <a href='https://github.com/munawaralimangat'><font color='#2563EB'><u>Link</u></font></a>", job_date_style)],
    ]
    t_mini = Table(mini_data, colWidths=[350, 180])
    t_mini.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(t_mini)
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#9CA3AF'), spaceBefore=6, spaceAfter=6))

    # EDUCATION
    story.append(Paragraph("EDUCATION", section_heading))
    story.append(Paragraph("<b>Bachelor of commerce</b>", job_title_style))
    story.append(Paragraph("Calicut University, Thenhipalam", company_style))
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#9CA3AF'), spaceBefore=6, spaceAfter=6))

    # Declaration
    story.append(Paragraph("<b>Declaration</b>", job_title_style))
    story.append(Paragraph("I hereby declare that the above furnished details are true to the best of my knowledge and belief.", summary_style))
    story.append(Spacer(1, 10))
    story.append(Paragraph("<b>MUNAWAR ALI M</b>", ParagraphStyle('Sign', parent=job_title_style, alignment=2)))

    doc.build(story)
    print(f"Successfully generated PDF at: {output_path}")

if __name__ == "__main__":
    out1 = os.path.abspath("public/Munawar_Ali_Resume.pdf")
    out2 = os.path.abspath("public/resume.pdf")
    create_resume(out1)
    create_resume(out2)
