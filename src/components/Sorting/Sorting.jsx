import { useDispatch } from "react-redux"
import { changeParams } from "../../redux/bookSLice"
const Sorting = () => {

    const dispatch = useDispatch()

    return (
        <div className="filter">
            <div>
                <span>Categories</span>
                <select onChange={(e) => dispatch(changeParams({subject: e.target.value}))}>
                    <option value="all">all</option>
                    <option value="art">art</option>
                    <option value="biography">biography</option>
                    <option value="computers">computers</option>
                    <option value="history">history</option>
                    <option value="medical">medical</option>
                    <option value="poetry">poetry</option>
                </select>
            </div>
            <div>
                <span>Sorting by</span>
                <select onChange={(e) => dispatch(changeParams({orderBy: e.target.value}))}>
                    <option value="relevance">relevance</option>
                    <option value="newest">newest</option>
                </select>
            </div>
        </div>
    )
}

export default Sorting