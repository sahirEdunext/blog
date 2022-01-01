import React, { useState, useEffect } from 'react'
import dafulatImage from '../images/s4.jpg'
const BlogComponent = () => {
    const [blogData, SetBlogData] = useState([]);

    const f = async () => {
        const res = await fetch("https://newsdata.io/api/1/news?apikey=pub_3130ed92e8266628b91088870e946a6274ac&q=vaccination&country=in");
        const json = await res.json();
        //console.log(json.results);
        SetBlogData(json.results)
    };
    useEffect(() => {
        f();
    }, []);
    return (
        <>

            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">Blogs</li>
            </ol>

            <section className="ab-info-main py-5">
                <div className="container py-lg-3">
                    <div className="ab-info-grids">
                        <h3 className="tittle text-center mb-lg-5 mb-3">Blog Posts</h3>
                        <div id="products" className="row view-group">

                            {blogData.length > 0 && blogData != undefined ? blogData.map((item) => {
                                return (
                                    <div key={item.pubDate} className="item col-lg-4">
                                        <div className="thumbnail card">
                                            <div className="img-event">
                                                <img className="group list-group-image img-fluid" src={item.image_url !="" && item.image_url !=undefined ? item.image_url : dafulatImage } alt="" />
                                            </div>
                                            <div className="caption card-body">
                                                <h4 className="group card-title text-capitalised inner list-group-item-heading">
                                                    {item.title.substring(1, 20).toLowerCase()+"..."}</h4>
                                                <p className="group inner list-group-item-text">
                                                    {item.description.substring(1, 70)+"..."}</p>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <p className="lead">
                                                           {item.pubDate.split(" ")[0].split("-").reverse().join("-")}</p>
                                                    </div>
                                                    <div className="col-6 ban-buttons">
                                                        <a className="btn btn-course" href="">View More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }): 'Data Not Found'}
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default BlogComponent