{
    # Theme information
    'name': "FPBŻ frontend",
    'description': """
    This is a custom theme made for Federacja Polskich Banków Żywności
    """,
    'category': 'Theme',
    'version': '1.0',
    'css': ['static/src/css/custom.css'],
    'depends': ['website'],

    # templates, pages, and snippets
    'data': [
        'views/config.xml',
        
    # pages
        'templates/pages/header.xml',
        'templates/pages/home_page.xml',
        'templates/pages/footer.xml',
        'templates/pages/become_partner.xml',
        
    # snippets
        'templates/snippets/common_snippets.xml',
        'templates/snippets/main_top_white_text.xml',
        'templates/snippets/why_is_it_worth.xml',
        'templates/snippets/map_of_poland.xml',
        'templates/snippets/quote_div.xml',
        'templates/snippets/volunteers_newsletter.xml',
        'templates/snippets/meet_our_volunteers.xml',
    ],
    'application': True,
    # Your information
    'author': "Laboratorium EE, Kamil Woźniak",
    'website': "http://laboratorium.ee",
}