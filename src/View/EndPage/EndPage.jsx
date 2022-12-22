import { Link } from "react-router-dom";
function EndPage() {
    return (
        <div className=" h-[60vh]">
            <div className=" container mx-auto ">

                <div className=" mx-auto w-[500px] rounded-3xl bg-green-200 mt-20">
                <h1 className=" text-center  py-4 px-8 text-3xl"> Всё прошло хорошо! Ожидайте связи с менеджером.</h1>
                    <h1 className=" text-center  py-4 px-8 text-3xl"> По вопросам обращайтесь на горячую линию : +7 (708) 661 7956</h1>
                </div>


                    <Link className="text-center " to={'/'}><h1 className="mt-12 text-2xl bg-red-200 p-4 px-4 py-2 rounded-3xl w-56 mx-auto">Вернуться назад</h1></Link>

            </div>

        </div>);
}

export default EndPage;