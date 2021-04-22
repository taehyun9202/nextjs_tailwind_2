
## purpose

The original purpose of the project is getting famililar with next js and tailwind.

I built simple e-commercial admin's item upload page using state update and I never used state update for object. 

So I tried to focus on updating state with array and object


**state update for array**
```
const itemImage = useRef(null);
const [imageList, setImageList] = useState([]);

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
```


**state update for object**
```
const addOption = (e) => {
    e.preventDefault();
    if (options[itemOption.current.value]) {
      alert("Item option already exists");
    } else {
      let updatingInfo = { [itemOption.current.value]: [] };
      console.log(updatingInfo);
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
```

```
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
```
