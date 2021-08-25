import React, { useState,useEffect } from 'react';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import dataapi from "../../Services/svtm-data";


const Dmbangles = () => {
    const [resp,setResp]=useState([])
    useEffect(() => {
        getdataset()
      }, []);
      const getdataset=()=>{
          dataapi.getAll()
          .then(response => {
            setResp(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    return (
        <section>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <div class="accordion" id="accordionExample">
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Design / Finishing    
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Bridal Collection(3)
                                             </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Emerald Collection(3)
                                             </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Kundan Collection(4)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Lakshmi Collection(2)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Kundan Collection(4)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                            Antique Collection(7)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Lakshmi Collection(2)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Light Weight Collection(11)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Nagaas Collection(8)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Navaratna Collection(8)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Peacock Collection(3)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Ruby Collection(2)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Swarovski/CZ Collection(24)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                18k Rings(2)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Auspicious Collection(3)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion" id="accordionExample2">
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree">
                                            Stocks status
                                         </button>
                                    </h5>
                                </div>
                                <div id="collapseThree2" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample2">
                                    <div class="card-body">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Ready For Shipping(81)
                                             </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Place An Order(9)
                                             </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion" id="accordionExample3">
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree">
                                            Occasions
                                         </button>
                                    </h5>
                                </div>
                                <div id="collapseThree3" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample3">
                                    <div class="card-body">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Wedding(42)
                                             </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Engagement(43)
                                             </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Anniversary(37)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Casual Wear(23)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Party wear(36)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Offline Wear(14)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Daily Wear(32)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion" id="accordionExample4">
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree4" aria-expanded="false" aria-controls="collapseThree">
                                            Price
                                         </button>
                                    </h5>
                                </div>
                                <div id="collapseThree4" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample4">
                                    <div class="card-body">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                ₹0 - ₹50,000(63)
                                             </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                ₹50,000 - ₹100,000(26)
                                             </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                ₹100,000 - ₹150,000(1)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion" id="accordionExample5">
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree5" aria-expanded="false" aria-controls="collapseThree">
                                            Gender
                                         </button>
                                    </h5>
                                </div>
                                <div id="collapseThree5" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample5">
                                    <div class="card-body">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Male(14)
                                             </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Female(56)
                                             </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Kids(17)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Male & Female(3)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion" id="accordionExample6">
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree6" aria-expanded="false" aria-controls="collapseThree">
                                            Size
                                         </button>
                                    </h5>
                                </div>
                                <div id="collapseThree6" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample6">
                                    <div class="card-body">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                6(1)
                                             </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                10(1)
                                             </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                11(1)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                12(3)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                13(5)
                                             </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                14(2)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                15(5)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                16(5)
                                             </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                17(4)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                18(4)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                19(1)
                                             </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                20(4)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                21(1)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                22(8)
                                             </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                23(4)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                24(4)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion" id="accordionExample7">
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree7" aria-expanded="false" aria-controls="collapseThree">
                                            Jwele Type
                                         </button>
                                    </h5>
                                </div>
                                <div id="collapseThree7" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample7">
                                    <div class="card-body">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Plain band(13)
                                             </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Traditional(1)
                                             </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Flower(1)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Nagas work(5)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Navarathna(1)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label ml-5" for="flexCheckDefault">
                                                Mango(3)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9 mb-4">
                    {resp.map((item,index)=>(
                        <div className="col-12 col-lg-4">
                            <div class="card card-gold d-flex justify-content-center">
                                <img class="card-img-top card-logo-img" src={item.imgurl} alt="Card image cap" />
                                <div class="card-body">
                                    <h4 class="card-title">{item.name}</h4>
                                    <div className="sm-divider"></div>
                                    <h5 class="card-title">{item.price}</h5>
                                    <p class="card-text text-center"><em>₹{item.description}</em></p>
                                </div>
                            </div>
                        </div>
    ))}
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
};
export default Dmbangles;