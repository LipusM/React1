const c = console.log.bind(document)

import "./style.scss"

const cities = [
    'Praha',
    'Brno',
    'Ostrava',
    'Plzeň',
    'Liberec',
    'Olomouc',
    'České Budějovice',
    'Hradec Králové',
    'Ústí nad Labem',
    'Pardubice',
  ];

const CviceniSeznamy = () => {

    return (
        <>
            {cities.map(city => <div className={city}>{city}</div>)}
        </>
    )

}

export default CviceniSeznamy