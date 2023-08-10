import { useState } from "react"

function Menu() {
    const MenuList = [
        {
            id: 1,
            product: "珍珠奶茶",
            description: "香濃奶茶搭配QQ珍珠",
            price: 50,
            stock: 20
        },
        {
            id: 2,
            product: "冬瓜檸檬",
            description: "清新冬瓜配上新鮮檸檬",
            price: 45,
            stock: 18
        },
        {
            id: 3,
            product: "翡翠檸檬",
            description: "綠茶與檸檬的完美結合",
            price: 55,
            stock: 34
        },
        {
            id: 4,
            product: "四季春茶",
            description: "香醇四季春茶，回甘無比",
            price: 45,
            stock: 10
        },
        {
            id: 5,
            product: "阿薩姆奶茶",
            description: "阿薩姆紅茶搭配香醇鮮奶",
            price: 50,
            stock: 25
        },
        {
            id: 6,
            product: "檸檬冰茶",
            description: "檸檬與冰茶的清新組合",
            price: 45,
            stock: 20
        },
        {
            id: 7,
            product: "芒果綠茶",
            description: "芒果與綠茶的獨特風味",
            price: 55,
            stock: 18
        },
        {
            id: 8,
            product: "抹茶拿鐵",
            description: "抹茶與鮮奶的絕配",
            price: 60,
            stock: 20
        },
    ]  

    const [todo, setTodo] = useState(MenuList);
    const [changeList, setChangeList] = useState(MenuList);

    const addStock = (id) => {
        const newTodo = todo.map((value) => {
            return value.id === id ? {...value, stock: (value.stock += 1)} : value;
        })
        setTodo(newTodo)
    }

    const decreaseStock = (id) => {
        const newTodo = todo.map((value) => {
            return value.id === id ? {...value, stock: (value.stock -= 1)} : value;
        })
        setTodo(newTodo)
    }

    const changeProduct = (id) => {
        const newTodo = todo.map((value) => {
            return value.id === id ? changeList[id - 1].product !== "" ? {...value, product: changeList[id - 1].product} : value : value;
        })
        setTodo(newTodo)
    }

    const changeInput = (id, newProduct) => {
        const newChangeList = changeList.map((value) => {
            return value.id === id ? newProduct !== "" ? {...value, product: newProduct} : value : value;
        })
        setChangeList(newChangeList);
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                      <th scope="col">品項</th>
                      <th scope="col">描述</th>
                      <th scope="col">價格</th>
                      <th scope="col">庫存</th>
                      <th scope="col">編輯品項</th>
                    </tr>
                </thead>
                <tbody>
                    {todo.map((value) => {
                        return (
                            <tr key={value.id}>
                                <td>{value.product}</td>
                                <td>
                                    <small>{value.description}</small>
                                </td>
                                <td>{value.price}</td>
                                <td>
                                    <button onClick={() => decreaseStock(value.id)}>-</button>
                                    {value.stock}
                                    <button onClick={() => addStock(value.id)}>+</button>
                                </td>
                                <td>
                                    <label htmlFor="productEdit"></label>
                                    <input 
                                       id="productEdit"
                                       type="text"
                                       onChange={(event) => changeInput(value.id, event.target.value)}
                                       defaultValue={value.product}
                                    />
                                    <button onClick={() => changeProduct(value.id)}>更改</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Menu