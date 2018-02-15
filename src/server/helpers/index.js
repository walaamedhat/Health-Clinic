function filterEvents(events) {
  const allEvents = [];
  for (let i = 0; i < events.length; i++) {
    const arr = events[i].date.toLocaleDateString().split('-');
    const time = events[i]['time-set'].split(':');
    const ob = {
      title: events[i].name,
      start: { y: Number(arr[0]),m: Number(arr[1]) - 1,d: Number(arr[2]),h: Number(time[0])-2,i: Number(time[1]),s: Number(time[2]) },
      end: { y: Number(arr[0]),m: Number(arr[1]) - 1,d: Number(arr[2]),h: Number(time[0])-2,i: Number(time[1])+10,s: Number(time[2]) }

    };
    allEvents.push(ob);
  }
  console.log('events' , allEvents);

  return allEvents;
}

module.exports = filterEvents;
// `${},${},${arr[2]},${time[0]},${time[1]},${
//   time[2]
// },0`
// `${arr[0]},${Number(arr[1]) - 1},${arr[2]},${time[0]},${Number(
//   time[1]
// ) + 10},${time[2]},0`

//
// events={[{ title: this.props.event[0].title ,
//   allDay: true,
//   start: new Date(this.props.event[0].start.y,this.props.event[0].start.m,this.props.event[0].start.d),
//   end: new Date(this.props.event[0].start.y,this.props.event[0].start.m,this.props.event[0].start.d) }]}
