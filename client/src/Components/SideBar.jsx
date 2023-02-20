import { useState } from 'react'
import { useCategoryContext } from "../hooks/useCategoryContext"
import CategoryItem from './CategoryItem'


const SideBar = ({ categories, activeCategory, setActiveCategory, setActiveCategoryTitle, user }) => {
    const { dispatch: dispatchCategory } = useCategoryContext()
    const [title, setTitle] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const category = { title }


        const response = await fetch('/category', {
            method: 'POST',
            body: JSON.stringify(category),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.err)
        }

        if (response.ok) {
            setTitle('')
            setError(null)
            console.log('new category added')
            dispatchCategory({ type: 'CREATE_CATEGORY', payload: json })
        }

    }

    console.log(categories);
    return (
        <div className='sidebar'>
            <div className='category-list'>
                <span className={`category-item ${activeCategory === "" && "sidebar-active"}`} onClick={() => {
                    setActiveCategory('')
                    setActiveCategoryTitle('')
                }
                }> All Tasks</span>

                {/* {categories?.map((data) => (
                    <CategoryItem
                        key={data._id}
                        category={data}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        setActiveCategoryTitle={setActiveCategoryTitle}
                        user={user}
                    />
))} */}

                <form onSubmit={handleSubmit}>
                    <input type="text"
                        className='border-0'
                        style={{ cursor: 'pointer' }}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} placeholder='+ New Category'
                        required
                    />
                    {error && <div className='error'>{error}</div>}
                </form>

            </div>
        </div>
    )
}

export default SideBar