function filterEvents(events) {
  const allEvents = [];
  for (let i = 0; i < events.length; i++) {
    const arr = events[i].date.toLocaleDateString().split('-');
    const time = events[i]['time-set'].split(':');
    const ob = {
      title: events[i].name,
      start:
        'new Date(' +
        `${arr[0]},${Number(arr[1]) - 1},${arr[2]},${time[0]},${time[1]},${
          time[2]
        },0)`,
      end:
        'new Date(' +
        `${arr[0]},${Number(arr[1]) - 1},${arr[2]},${time[0]},${Number(
          time[1]
        ) + 10},${time[2]},0)`
    };
    allEvents.push(ob);
  }

  return allEvents;
}

module.exports = filterEvents;
