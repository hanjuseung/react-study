import { Route, Routes, Link, useNavigate } from "react-router";
function Practice06() {

    //생성한 프로젝트 
    // npm install react-router
    // index.js <BrowserRouter/> 설정

    let navigate = useNavigate();

    return (
        <div>
            <div>
                {/* <button onClick={() => {navigate("/") }}><Link>Main</Link></button>
                <button onClick={() => {navigate("/info") }}><Link>/info</Link></button>
                <button onClick={() => {navigate('/mypage') }}><Link>/mypage</Link></button>
                <button onClick={() => {navigate('/cart') }}><Link>/cart</Link></button> */}

                <button><Link to='/'>Main</Link></button>
                <button><Link to='/info'>/info</Link></button>
                <button><Link to='/mypage'>/mypage</Link></button>
                <button><Link to='/cart'>/cart</Link></button>

            </div>
            <Routes>
                <Route  path="/" element={<Main/>}></Route>
                <Route  path="/info" element={<Info/>}></Route>
                <Route  path="/mypage" element={<Mypage/>}></Route>
                <Route  path="/cart" element={<Cart/>}></Route>
            </Routes>
        </div>

    );
    function Main() {
        return (
            <h1 style={{backgroundColor: "lightcyan"}}>메인 공간</h1>
        );
    }
    function Info() {
        return (
            <h1 style={{backgroundColor: "lightcyan"}}>인포 공간</h1>
        );
    }
    function Mypage() {
        return (
            <h1 style={{backgroundColor: "lightcyan"}}>마이페이지 공간</h1>
        );
    }
    function Cart() {
        return (
            <h1 style={{backgroundColor: "lightcyan"}}>카트 공간</h1>
        );
    }

}

export default Practice06;