export const mobileMenuItems = [
    {
        title:"Events",
        url:"/admin/dashboard/events",
        icon:"bi bi-calendar2-event"
    },
    {
        title:"Gallery",
        url:"/admin/dashboard/gallery",
        icon:"bi bi-card-image"
    },
    {
        title:"Announcements",
        url:"/admin/dashboard/announcements",
        icon:"bi bi-megaphone"
    },
    {
        title:"Committee",
        icon:"bi bi-people-fill",
        children:[
            {
                title:"കർഷക കൂട്ടായ്‌മ",
                url:`/admin/dashboard/committee/${'farmers'}`
            },
            {
                title:"വിമുക്ത ഭട കൂട്ടായ്‌മ",
                url:`/admin/dashboard/committee/${'army'}`
            },
            {
                title:"വനിത കൂട്ടായ്‌മ",
                url:`/admin/dashboard/committee/${'wemen'}`
            },
            {
                title:"ബാലവേദി",
                url:`/admin/dashboard/committee/${'children'}`
            }
        ]
    },
    {
        title:"Activity",
        icon:"bi bi-activity",
        children:[
            {
                title:"Batmindon",
                url:`/admin/dashboard/activity/${'batmindon'}`
            },
            {
                title:"Karate",
                url:`/admin/dashboard/activity/${'karate'}`
            },
            {
                title:"Dance",
                url:`/admin/dashboard/activity/${'dance'}`
            },
            {
                title:"Music",
                url:`/admin/dashboard/activity/${'music'}`
            },
            {
                title:"Spoken English",
                url:`/admin/dashboard/activity/${'spokenenglish'}`
            }
        ]
    }
]