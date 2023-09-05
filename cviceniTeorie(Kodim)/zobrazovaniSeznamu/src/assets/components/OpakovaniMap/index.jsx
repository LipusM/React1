const c = console.log.bind(document)

import "./style.scss"

const weekdays = [
    'pondělí',
    'úterý',
    'středa',
    'čtvrtek',
    'pátek',
    'sobota',
    'neděle',
  ];
  const months = [
    {
      name: 'leden',
      days: 31,
    },
    {
      name: 'únor',
      days: 28,
    },
    {
      name: 'březen',
      days: 31,
    },
    {
      name: 'duben',
      days: 30,
    },
    {
      name: 'květen',
      days: 31,
    },
    {
      name: 'červen',
      days: 30,
    },
    {
      name: 'červenec',
      days: 31,
    },
    {
      name: 'srpen',
      days: 31,
    },
    {
      name: 'září',
      days: 30,
    },
    {
      name: 'říjen',
      days: 31,
    },
    {
      name: 'listopad',
      days: 30,
    },
    {
      name: 'prosinec',
      days: 31,
    },
  ];

const OpakovaniMap = () => {

    const weekdaysUp = weekdays.map(weekday => weekday.toUpperCase())
    const weekdaysFirstTwo = weekdays.map(weekday =>  weekday.slice(0, 2))

    const onlyMonths = months.map(month => month.name)
    const firstDayMonth = months.map(firstDay =>  `1. ${firstDay.name} 2020`)

    return (
        <>
        {c(weekdaysUp)}
        {c(weekdaysFirstTwo)}

        {c(onlyMonths)}
        {c(firstDayMonth)}
        </>
    )

}

export default OpakovaniMap