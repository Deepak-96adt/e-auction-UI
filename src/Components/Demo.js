import { useMemo, useState } from "react";

function Demo() {
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState();
  console.log("rendring");

  // const handlePrime = (num) => {};

  // const value = findNthPrime(name);
  // console.log(name);
  let temp;
  const Prime = useMemo(()=>{temp=findNthPrime(name);
  },[name]);
  // console.log(temp);

  return (
    <>
      <div className={`${toggle ? "bg-dark" : "bg-light"} w-50 h-50`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          maiores ut tenetur? At voluptatum quam sed similique inventore harum
          placeat totam, repudiandae aspernatur provident ipsum, mollitia ea,
          atque nihil obcaecati!
        </p>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
          className="text-primary"
        >
          dark
        </button>
        <br />
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => {
            // handlePrime(e.target.value);
            setName(e.target.value);
          }}
        />
        <p>nth prime : {temp}</p>
      </div>
    </>
  );
}

//Function to find the nth prime number
function findNthPrime(n) {
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  //Function to check the number is prime
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return num - 1;
}

export default Demo;
