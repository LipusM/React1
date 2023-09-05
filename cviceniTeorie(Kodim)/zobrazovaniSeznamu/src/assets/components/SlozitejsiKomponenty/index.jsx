const c = console.log.bind(document)

import "./style.scss"

const list = [
    { product: 'mrkev', amount: '3ks', done: false },
    { product: 'paprika', amount: '2ks', done: true },
    { product: 'cibule', amount: '2ks', done: false },
    { product: 'čínské zelí', amount: '1ks', done: true },
    { product: 'arašídy', amount: '250g', done: false },
    { product: 'sojová omáčka', amount: '1ks', done: false },
  ];

const SlozitejsiKomponenty = () => {

    return (
        <>
    <h1>Nákupní seznam</h1>
    <div className="shopping-list">
      {list.map((item) => {
        const tickClass = item.done
          ? 'item__done item__done--tick'
          : 'item__done';

        return (
          <li className="item">
            <div className="item__product">{item.product}</div>
            <div className="item__amount">{item.amount}</div>
            <div className={tickClass}></div>
          </li>
        );
      })}
    </div>
        </>
    )

}

export default SlozitejsiKomponenty