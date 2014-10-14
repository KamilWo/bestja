# -*- coding: utf-8 -*-
{
    'name': "Bestja: Job Offers",
    'summary': """Adding and displaying job offers""",
    'author': "Laboratorium EE",
    'website': "http://www.laboratorium.ee",
    'version': '0.1',
    'js': ['static/src/js/*.js'],
    'qweb': ['static/src/xml/*.xml'],
    'css': ['static/src/css/*.css'],

    # any module necessary for this one to work correctly
    'depends': [
        'base',
        'project',
        'website',
        'bestja_volunteer',
        'bestja_base'
    ],

    # always loaded
    'data': [
        'config.xml',
        'views/offer.xml',
        'views/assets.xml',
        'data/daypart.xml',
        'data/helpee_group.xml',
        'data/weekday.xml',
        'templates.xml',
        'menu.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        #'demo.xml',
    ],
    'installable': True,
    'application': True,
}
