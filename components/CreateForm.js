import { useEffect, useRef, useState } from "react";

function CreateForm() {
  const itemName = useRef(null);
  const itemImage = useRef(null);
  const itemPrice = useRef(null);
  const itemOption = useRef(null);
  const optionChoice = useRef(null);
  const [imageList, setImageList] = useState([]);
  const [choiceList, setChoiceList] = useState([]);
  const [options, setOptions] = useState({});

  const addImage = (e) => {
    e.preventDefault();
    let newList = [...imageList, itemImage.current.value];
    setImageList(newList);
    itemImage.current.value = "";
  };

  const removeImage = (e, image) => {
    e.preventDefault();
    setImageList((newList) => newList.filter((item) => item !== image));
  };

  const addOption = (e) => {
    e.preventDefault();
    if (options[itemOption.current.value]) {
      alert("Item option already exists");
    } else {
      let updatingInfo = { [itemOption.current.value]: [] };
      setOptions((prev) => ({ ...prev, ...updatingInfo }));
    }
    itemOption.current.value = "";
  };

  const removeOption = (e, optionKey) => {
    e.preventDefault();

    // setOptions((option) =>
    //   Object.keys(options)
    //     .filter((key) => key === optionKey)
    //     .forEach((key) => delete options[optionKey])
    // );

    // let newObj = options;
    // Object.keys(newObj)
    //   .filter((key) => key === optionKey)
    //   .forEach(() => delete newObj[optionKey]);
    // setOptions(newObj);

    setOptions((prev) => {
      const state = { ...prev };
      delete state[optionKey];
      return state;
    });
  };

  const addChoice = (e, optionKey) => {
    e.preventDefault();
    let currentChoice = options[optionKey];
    let updatingChoice = {
      [optionKey]: [...currentChoice, optionChoice.current?.value],
    };
    setOptions((prev) => ({ ...prev, ...updatingChoice }));
    optionChoice.current.value = "";
  };

  const removeChoice = (e, optionKey, choice) => {
    e.preventDefault();
    // let choiceList = options[optionKey];
    // choiceList = choiceList.filter((item) => item !== choice);
    let currentChoice = options[optionKey];
    let updatingChoice = {
      [optionKey]: currentChoice.filter((item) => item !== choice),
    };
    setOptions((prev) => ({ ...prev, ...updatingChoice }));
  };

  const createItem = (e) => {
    e.preventDefault();
    let newItem = {
      name: itemName.current.value,
      img: imageList,
      price: itemPrice.current.value,
      option: options,
    };
    console.log(newItem);
  };

  return (
    <div className="flex flex-col w-full p-12 justify-center mx-auto w-full sm:w-5/6 md:w-8/12 lg:w-[600px] ">
      <h1>Create New Item</h1>
      <form>
        <div className="flex flex-col border-b-2 border-gray-500 ">
          <label>Item Name</label>
          <input
            type="text"
            className="border border-gray-200 pl-2 my-4 w-full"
            ref={itemName}
          />
        </div>
        <div className="flex flex-col border-b-2 border-gray-500 ">
          <label>Item Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            className="border border-gray-200 pl-2 my-4 w-full"
            ref={itemPrice}
          />
        </div>

        <form>
          <div className="flex flex-col border-b-2 border-gray-500 ">
            <label>Item Image</label>
            {imageList.map((image) => (
              <div className="flex justify-between w-full">
                <p className="pr-2 line-clamp-1">{image}</p>
                <p
                  className="justify-end cursor-pointer"
                  onClick={(e) => removeImage(e, image)}
                >
                  X
                </p>
              </div>
            ))}

            <input
              type="text"
              className="border border-gray-200 pl-2 my-4 w-full"
              ref={itemImage}
            />
          </div>
          <button onClick={(e) => addImage(e)} hidden></button>
        </form>

        <form>
          <div className="flex flex-col border-b-2 border-gray-500 ">
            <label>Item Option</label>
            {Object.keys(options)?.map((key) => (
              <div className="flex flex-col">
                <div className="flex justify-between w-full">
                  <p className="h-5">{key}</p>
                  <p
                    className="justify-end cursor-pointer"
                    onClick={(e) => removeOption(e, key)}
                  >
                    X
                  </p>
                </div>
                {options[key].map((choice) => (
                  <div className="flex justify-between w-full">
                    <p className="h-5">-{choice}</p>
                    <p
                      className="justify-end cursor-pointer"
                      onClick={(e) => removeChoice(e, key, choice)}
                    >
                      X
                    </p>
                  </div>
                ))}
                <form>
                  <input
                    type="text"
                    className="border border-gray-200 pl-2 my-4 w-full"
                    ref={optionChoice}
                    placeholder={`add ${key} option`}
                  />
                  <button hidden onClick={(e) => addChoice(e, key)}></button>
                </form>
              </div>
            ))}

            <input
              type="text"
              className="border border-gray-200 pl-2 my-4 w-full"
              ref={itemOption}
            />
          </div>
          <button onClick={(e) => addOption(e)} hidden></button>
        </form>
      </form>
      <button
        className="border border-gray-500 py-1 w-full mt-5"
        onClick={createItem}
      >
        Create Item
      </button>
    </div>
  );
}

export default CreateForm;
