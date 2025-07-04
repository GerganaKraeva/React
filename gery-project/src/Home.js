import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, expedita doloribus neque enim optio esse alias quisquam distinctio, recusandae animi ducimus quis vero minus qui rem consectetur fuga nostrum similique!", author: "Petq", id: 1 },
        { title: "Welcome party!", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, expedita doloribus neque enim optio esse alias quisquam distinctio, recusandae animi ducimus quis vero minus qui rem consectetur fuga nostrum similique!", author: "Ivo", id: 2 },
        { title: "Web dev top tips", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, expedita doloribus neque enim optio esse alias quisquam distinctio, recusandae animi ducimus quis vero minus qui rem consectetur fuga nostrum similique!", author: "Petq", id: 3 }
    ]);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);

    }

    useEffect( () => {
        console.log("use effect ran");
        console.log(blogs);
    });

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs!"  handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Petq")} title="Petq`s blocks!" /> */}

        </div>
    );
}

export default Home;