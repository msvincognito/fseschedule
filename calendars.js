PROXY_PREFIX = "https://ical-cors-proxy.herokuapp.com/?";
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'listWeek',
        eventSources: [{ // Incognito
                className: "Incognito",
                url: PROXY_PREFIX +
                    'https://calendar.google.com/calendar/ical/kjl7euqkd7j5n72t44eth4i2o8%40group.calendar.google.com/public/basic.ics',
                format: 'ics',
                color: 'red'
            },
            { // Universalis
                className: "Universalis",
                url: PROXY_PREFIX +
                    'https://calendar.google.com/calendar/ical/g7l87lojlbdltb4992tbp9vnjs%40group.calendar.google.com/public/basic.ics',
                format: 'ics',
                color: 'blue'
            },
            { // Aperture
                className: "Aperture",
                url: PROXY_PREFIX +
                    'https://calendar.google.com/calendar/ical/kjfjra67lkg25iblfp06ihuanc%40group.calendar.google.com/public/basic.ics',
                format: 'ics',
                color: 'yellow'
            },
            /*
             { // Math Soc
             className: "Math Soc"
             url: PROXY_PREFIX + 'https://use01.thegood.cloud/remote.php/dav/public-calendars/BHNK5Arjn4S7GMGX/?export',
             format: 'ics'
             }
             */
        ],
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