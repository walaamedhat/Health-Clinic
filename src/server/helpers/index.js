function filterEvents(events) {
  const allEvents = [];
  for (let i = 0; i < events.length; i++) {
    const arr = events[i].date.toLocaleDateString().split('-');
    const time = events[i]['time-set'].split(':');
    const ob = {
      title: events[i].name,
      start: {
        y: Number(arr[0]),
        m: Number(arr[1]) - 1,
        d: Number(arr[2]),
        h: Number(time[0]) - 2,
        i: Number(time[1]),
        s: Number(time[2])
      },
      end: {
        y: Number(arr[0]),
        m: Number(arr[1]) - 1,
        d: Number(arr[2]),
        h: Number(time[0]) - 2,
        i: Number(time[1]) + 10,
        s: Number(time[2])
      }
    };
    allEvents.push(ob);
  }

  return allEvents;
}

module.exports = filterEvents;
