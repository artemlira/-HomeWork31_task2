import { useEffect, useState } from "react";
import axios from "axios";
import img1 from '../src/img/1.png';
import img2 from '../src/img/2.png';
import Modal from "./components/Modal";


function App() {
  const [random, setRandom] = useState([]);
  const [userValue, setUserValue] = useState(0);
  const [modal, setModal] = useState(null);
  const [result, setResult] = useState(null);


  useEffect(() => {
    if (userValue > 0) {
      axios.post('https://api.random.org/json-rpc/4/invoke', {
        method: 'generateIntegers',
        jsonrpc: "2.0",
        params: {
          apiKey: '279c0934-2766-4615-b3c5-c15d9eddf827',
          n: 1,
          min: 1,
          max: 2
        },
        id: 1
      })
        .then((response) => {
          setRandom(response.data.result.random.data);
          checkWinn(userValue, response.data.result.random.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [userValue]);

  function checkWinn(a, b) {
    if (a == b[0]) {
      setResult(true)
    } else {
      setResult(false)
    }
    setModal(true);
  }

  function addActive(e) {
    e.target.classList.add('active');
  }


  return (
    <div className="wrapper">
      <div className="container">
        <div className="user__choise">
          <h3>Вгадайте орел або решка</h3>
          <div>
            <div className="choise" onClick={(e) => {
              setUserValue(2);
              addActive(e);
            }}>Орел</div>
            <div className="choise" onClick={(e) => {
              setUserValue(1);
              addActive(e);
            }}>Решка</div>
          </div>
        </div>
        <div className="images">
          <div className="images__container">
            {
              random[0] === 1 && <img src={img1} alt='Image of a coin' />
            }
            {
              random[0] === 2 && <img src={img2} alt='Image of a coin' />
            }
          </div>
        </div>
      </div>
      <Modal modal={modal} setModal={setModal} result={result} />
    </div>
  );
}

export default App;
