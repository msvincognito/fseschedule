PROXY_PREFIX = "https://ical-cors-proxy.herokuapp.com/?";

// my guess is that in the future the picture links will break... you can easily replace them in this list
const calendarSources = [{ // Incognito
        className: "MSV Incognito",
        url: "https://msvincognito.nl",
        logo: "https://msvincognito.nl/wp-content/uploads/2013/08/web-logo-zwart.png",
        logoStyle: "width:175px; height:50px;",
        calendarUrl: 'https://calendar.google.com/calendar/ical/kjl7euqkd7j5n72t44eth4i2o8%40group.calendar.google.com/public/basic.ics',
        format: 'ics',
        color: 'red'
    },
    { // Universalis
        className: "Universalis",
        url: "https://ucmsa.nl/",
        logo: "https://ucmsa.nl/wp-content/uploads/2020/01/cropped-UCMSA_Universalis_Logo-1.png",
        logoStyle: "width:70px; height:50px;",
        calendarUrl: 'https://calendar.google.com/calendar/ical/g7l87lojlbdltb4992tbp9vnjs%40group.calendar.google.com/public/basic.ics',
        format: 'ics',
        color: 'blue'
    },
    { // Aperture
        className: "Aperture",
        url: "https://www.msp-aperture.com/",
        logo: "https://static.wixstatic.com/media/59eb3d_3d2e3118804446ba91e9a5c361351693~mv2.png/v1/fill/w_346,h_304,al_c,lg_1,q_85/Logo_High_Res_no_background1.webp",
        logoStyle: "width:60px; height:50px;",
        calendarUrl: 'https://calendar.google.com/calendar/ical/kjfjra67lkg25iblfp06ihuanc%40group.calendar.google.com/public/basic.ics',
        format: 'ics',
        color: 'yellow'
    }
    /*,

        { // Math Soc
            className: "Math Soc",
            calendarUrl: 'https://use01.thegood.cloud/remote.php/dav/public-calendars/BHNK5Arjn4S7GMGX/?export',
            format: 'ics'
        }
    */

]
var relativeCalendarSources = calendarSources.map(obj =>
    obj.url != null ? {
        ...obj,
        url: PROXY_PREFIX + obj.calendarUrl
    } : obj
)
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'listWeek',
        eventSources: relativeCalendarSources,
        eventDidMount: function (info) {
            if (info.event.extendedProps.description) {
                var tooltip = tippy(info.el, {
                    content: info.event.extendedProps.description,
                    appendTo: () => document.body,
                    interactive: true,
                    interactiveBorder: 30,
                });
            }
        },
        noEventsContent: 'No events loaded (please wait a moment)'
    });
    calendar.render();
});