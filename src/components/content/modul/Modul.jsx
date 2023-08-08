const Modul = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div className="card flex-shrink-0 w-[700px] h-[250px] shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="card-title">
                <p className="py-2">Yang anda dapatan di pelatihan ini</p>
              </div>
              <div className="flex justify-between items-center text-sm">
                <div className="w-[20%] float-right">
                  <li>Deskripsi Hal 1</li>
                  <li>Deskripsi Hal 2</li>
                  <li>Deskripsi Hal 3</li>
                </div>
                <div className="width-[20%] float-left">
                  <li>Deskripsi Hal 4</li>
                  <li>Deskripsi Hal 5</li>
                </div>
              </div>
            </div>
          </div>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-[400px] h-[905px] shadow-2xl bg-base-100  border border-black border-t-2 ">
          <div className="card-body">
            <div className="card border border-black border-t-2 w-[full] h-[150px] p-0 m-0 shadow-2xl bg-base-100">
              <div className="text-left font-bold p-2 m-3">Progress</div>
              <a href="#" className="text-left font-bold pl-4 m-1">
                33%
              </a>
              <div className="flex justify-center items-center ">
                <progress
                  className="progress w-[300px] border border-black border-t-2 "
                  value="33"
                  max="100"
                ></progress>
              </div>
            </div>
            <div className="card border border-black border-t-2 w-[full] h-[667px] p-0 m-0 shadow-2xl bg-base-100">
              <div className=" flex justify-left items-left ">
                <ul className="p-0  menu  z-[1] bg-base-100 rounded-box w-56">
                  <li>
                    <a href="#"  className="btn btn-neutral border rounded-md w-[340px] text-white bg-neutral"> Modul 1</a>
                  </li>
                  <ul className="p-1 m-1">
                  <li>
                    <a href="#"  className="border rounded-md w-[270px] p-4 ">Sub Modul 1</a>
                  </li>
                  <li>
                    <a href="#"  className="border rounded-md w-[270px] p-4 ">Sub Modul 2</a>
                  </li>
                  <li>
                    <a href="#"  className="border rounded-md w-[270px] p-4 ">Sub Modul 3</a>
                  </li>
                  <li>
                    <a href="#"  className="border rounded-md w-[270px] p-4 ">Sub Modul 4</a>
                  </li>
                  </ul>
                </ul>
              </div>
              <div className=" flex justify-left items-left ">
                <ul className="p-0  menu  z-[1] bg-base-100 rounded-box w-56">
                  <li>
                    <a href="#"  className="btn btn-neutral border rounded-md w-[340px] text-white bg-neutral"> Modul 2</a>
                  </li>
                  <div className="m-1 p-1 grid justify-items-center">
                    <ul className="p-0 m-0">
                  <li>
                    <a href="#"  className="border rounded-md w-[270px] p-4 ">Sub Modul 1</a>
                  </li>
                  <li>
                    <a href="#"  className="border rounded-md w-[270px] p-4 ">Sub Modul 2</a>
                  </li>
                  <li>
                    <a href="#"  className="border rounded-md w-[270px] p-4 ">Sub Modul 3</a>
                  </li>
                  <li>
                    <a href="#"  className="border rounded-md w-[270px] p-4 ">Sub Modul 4</a>
                  </li>
                  </ul>
                  </div>
                </ul>
              </div>
                <br/>
              <details className="flex justify-center items-center ">
                <summary  className="btn p-0 m-0 border rounded-md w-[340px]">
                  Final Quis
                </summary>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modul;
