import Banner from "../../../Banner/Banner";
import "./Home.css";
import { useState } from "react";

function Home() {
  const [homeContent, setHomeContent] = useState(false);
  return (
    <>
      {/* <!-- Home Start --> */}
      <Banner />
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container about px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-12 about-text py-5 wow fadeIn"
            >
              <div className="p-lg-5 pe-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">Welcome to Home Component</h1>
                </div>
                <p className="mb-4 pb-3">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo erat amet , Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Corporis porro
                  temporibus maiores aspernatur laboriosam tenetur ut beatae
                  odit consequuntur, dolor doloremque, id excepturi voluptatibus
                  alias dicta quidem. Id, est Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Rem, nihil totam! Quos at iusto
                  voluptatem quia sed neque architecto reprehenderit nobis
                  voluptas odit. Ea quos maxime beatae commodi iusto libero!
                  Fugit provident consequatur consectetur architecto. Recusandae
                  sit voluptate impedit soluta ducimus ab voluptatem esse? Eius
                  suscipit beatae, necessitatibus commodi incidunt, labore quae,
                  sint obcaecati dolore dolorem officia unde modi. Vero.
                </p>
                {homeContent ? (
                  <div></div>
                ) : (
                  <button
                    onClick={() => {
                      setHomeContent(true);
                    }}
                    className="btn btn-primary py-3 px-5"
                  >
                    Explore More
                  </button>
                )}
                {homeContent && (
                  <div>
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum beatae eum laudantium rem consequuntur molestias
                      maxime sequi ipsam commodi illo adipisci nihil sit,
                      voluptatem maiores quo eaque molestiae. Natus doloribus
                      quae optio voluptatem? Dolores veritatis eaque nostrum
                      impedit asperiores nulla modi aut dicta, facilis amet sit,
                      culpa laboriosam, beatae reprehenderit eum consectetur
                      facere accusantium odio eligendi. Quis sint laudantium
                      facilis, neque voluptas quod modi nobis. Consequatur
                      provident quisquam laboriosam voluptas nihil sed sint
                      laudantium inventore harum aut? Sunt minima vero
                      voluptates repellendus quos aliquid doloribus blanditiis
                      dolores rerum culpa tenetur ipsam error facilis quod
                      deserunt adipisci molestiae soluta nesciunt eius,
                      voluptate in, earum exercitationem fugiat. Voluptas
                      recusandae et ullam ducimus quia asperiores doloremque
                      blanditiis, quas excepturi nesciunt veritatis obcaecati
                      vero, optio veniam odio, consequatur ea iure cupiditate
                      ratione numquam amet hic! Quisquam dicta hic odit
                      asperiores sunt molestias maxime eveniet dolor dignissimos
                      tempore, omnis autem veritatis ratione quas accusamus
                      cupiditate magni rem, quos atque nisi, delectus eius?
                      Totam aperiam optio dignissimos. Sapiente maiores, earum
                      cum quod, vitae veritatis odio distinctio, beatae dicta
                      non dolore porro fugit voluptatibus optio temporibus
                      architecto necessitatibus fugiat enim error accusamus
                      corporis. Eius praesentium nihil officia illum eveniet
                      atque mollitia distinctio voluptates quidem animi deleniti
                      hic dolore vitae assumenda dolor, aspernatur, asperiores
                      quam consequuntur? Officiis itaque excepturi neque
                      facilis. Doloremque praesentium quo blanditiis sequi
                      aperiam dolore rem vel adipisci provident, facere eos
                      maxime sapiente quas ut nisi cumque eligendi optio
                      voluptatibus accusantium. Itaque alias quo assumenda porro
                      expedita error quas architecto nihil minima, ut accusamus
                      accusantium ipsam maxime odit ratione numquam. Recusandae
                      blanditiis odit, velit nisi dignissimos eum inventore
                      eligendi corporis quos commodi fugit, fuga quas tempore
                      enim officiis omnis ipsa cum ducimus eius vero aliquam,
                      reiciendis ea? Explicabo, reprehenderit eos facilis
                      possimus non architecto nesciunt repellendus molestiae
                      quidem id corporis assumenda, quos facere error
                      praesentium!
                    </div>
                    
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Home End --> */}
    </>
  );
}

export default Home;
