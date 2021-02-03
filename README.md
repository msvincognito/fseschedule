# FSE Schedule
_Note: work in progress_

This simple html document is a gateway to view the public schedules of FSE study
assocations at a glance. See it in its full glory [under this
link](https://msvincognito.github.io/fseschedule/)

## How to add calendars
Calendars need to be added in the `eventSources` list given as an argument to the
`FullCalendar.Calendar` constructor, like the others in there. Make sure to use the
proxy by inserting the ical `<url>` like:
```
https://gitlab.com/k-cybulski/ical-cors-proxy/?<url>
```

## How the app works
At the core it uses [FullCalendar](https://fullcalendar.io/) for rendering events it
gets from ics calendars given by the study associations. These ics calendars can come
from anywhere, e.g. Nextcloud or Google Calendar.

Unfortunately, fetching the ics calendars from Nextcloud/Google directly through
clientside browser javascript is often impossible due to CORS, so all requests need
to be done through a proxy. In our case, there is an instance of
[ical-cors-proxy](https://gitlab.com/k-cybulski/ical-cors-proxy) sitting on Heroku
which allows for that.
