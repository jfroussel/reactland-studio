import svg1 from '../assets/icons/layout/1.svg'
import svg2 from '../assets/icons/layout/2.svg'
import svg3 from '../assets/icons/layout/3.svg'
import svg4 from '../assets/icons/layout/4.svg'
import svg5 from '../assets/icons/layout/5.svg'
import svg6 from '../assets/icons/layout/6.svg'
import svg7 from '../assets/icons/layout/7.svg'
import svg8 from '../assets/icons/layout/8.svg'
import svg9 from '../assets/icons/layout/9.svg'
import svg10 from '../assets/icons/layout/10.svg'
import svg11 from '../assets/icons/layout/11.svg'
import svg12 from '../assets/icons/layout/12.svg'
import form from '../assets/icons/form/form.svg'
import input from '../assets/icons/form/input.svg'
import checkbox from '../assets/icons/form/checkbox.svg'
import radio from '../assets/icons/form/radio.svg'
import button from '../assets/icons/form/button.svg'
import list from '../assets/icons/form/li.svg'
import textaera from '../assets/icons/form/textarea.svg'
import table from '../assets/icons/form/table.svg'
import select from '../assets/icons/form/select.svg'


export const FormIcons = [
    {
        name: 'formulaire',
        description: 'liste de composants pour creer vos formulaires',
        icons: [
            form,
            input,
            select,
            radio,
            checkbox,
            textaera,
            button,
            table,
            list
        ]
    }
]

export const webComponents = [
    {
        name: 'composants web',
        description: 'liste de composants pour vos pages web',
        icons: []
    }
]




export const topMenuConfig = [
    {
        name: 'Fichier',
        subMenu: ''
    },
    {
        name: 'Modifier',
        subMenu: ''
    },
    {
        name: 'Affichage',
        subMenu: ''
    },
    {
        name: 'Insérer',
        subMenu: ''
    },
    {
        name: 'Aide',
        subMenu: ''
    },
]


/**
 * h = header
 * lsb = left side bar
 * rsb = right side bar
 * c = content
 * f = footer
 * col = column
 * row = row
 */

export const LayoutTemplates = [
    {
        id: 1,
        name: 'h_lsb_c',
        description: "layout with header / left side bar / content",
        icon: svg1,
        schema: `<div class="container container-studio">
        
        </div>`
       
     
    },
    {
        id: 2,
        icon: svg2,
        name: '3col',
        description: "layout with 3 columns",
        schema: `<div class="container container-studio">
        
        </div>`
    },
    {
        id: 3,
        icon: svg3,
        name: '2col',
        description: "layout with 2 columns",
        schema: `<div class="container container-studio">
        
        </div>`
    },
    {
        id: 4,
        icon: svg4,
        name: 'lsb-1col',
        description: "layout with left side bar and 1 column",
        schema: `<div class="container container-studio">
        
        </div>`
    },
    {
        id: 5,
        icon: svg5,
        name: 'h_2col',
        description: "layout with header and 2 columns",
        schema: `<div class="container container-studio">
        
        </div>`
    },
    {
        id: 6,
        icon: svg6,
        name: 'h_1col_rsb',
        description: "layout with header 1 column and right side bar",
        schema: `<div class="container container-studio">
        
        </div>`
    },
    {
        id: 7,
        icon: svg7,
        name: 'c',
        description: "layout with just a div",
        schema: `<div class="container container-studio">
        
        </div>`
    },
    {
        id: 8,
        icon: svg8,
        name: '2row_2col',
        description: "layout with 2 row and 2 columns",
        schema: `<div class="container container-studio">
        
        </div>`
    },
    {
        id: 9,
        icon: svg9,
        name: 'h_lsb_c_rsb',
        description: "layout with header / left side / content and right side bar",
        schema: `<div class="container container-studio">
        
        </div>`
    },
    {
        id: 10,
        icon: svg10,
        name: '1col_rsb',
        description: "layout with 1 column and right side bar",
        schema: `<div class="container container-studio">
        
        </div>`
    },
    {
        id: 11,
        icon: svg11,
        name: '3row',
        description: "layout with 3 columns",
        schema: `<div class="container container-studio">
        
        </div>`
    },
    {
        id: 12,
        icon: svg12,
        name: 'h_c',
        description: "layout with header and content",
        schema: `<div class="container container-studio">
        
        </div>`
    },

]

