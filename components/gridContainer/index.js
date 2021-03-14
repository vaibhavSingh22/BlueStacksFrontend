import React, {useState} from "react";
import style from "../../styles/table.module.css";
import { formattedDate, getSvg } from "../../utils/helper";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from "../modal";
import Card from "../campaingCard";

const Table = props => {
    const {
        filteredData,
        data,
        updateServerData = () => {}
    } = props;


    const [showCalendar, setshowCalendar] = useState(undefined);
    const [showModal, setShowModal] = useState(!1)
    const [selected, setSelected] = useState({})

    const handleCalendarChange = (val, id) => {
        const changedServerData = data.map(element => {
             const newObj = {...element};
             if(newObj.id === id){
                 newObj.createdOn = new Date(val).getTime()
             }
             return newObj;
         });
        updateServerData(changedServerData);
        setshowCalendar(undefined);
    }
    const modalClosehandler = () => {
        setShowModal(!1);
        setSelected({});
    }
    return (
        <>
        <table className={style.table}>
            <tr className={style.tableHeader}>
                <th><div>DATE</div></th>
                <th><div>CAMPAIGN</div></th>
                <th><div>VIEW</div></th>
                <th><div>ACTIONS</div></th>
            </tr>

            {
                filteredData.map(row => {
                    const { createdAt, timeDiff } = formattedDate(row.createdOn);
                    return (
                        <tr className={style.row}>
                            <td>
                                <div className={style.text_normal_large}>{createdAt}</div>
                                <div className={style.text_italic_large}>{timeDiff}</div>
                            </td>
                            <td>
                                <div className={style.imgWrap}>
                                    <img src={row.image_url} className={style.logo} />
                                    <div>
                                        <div className={style.name} >{row.name}</div>
                                        <div className={style.region}>{row.region}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                            <div className={style.containerWithIcon}>
                                    <span className={style.iconCont}>{getSvg("PRICE")}</span>
                                    <span className={style.text_normal_med} onClick={_=>{
                                        setShowModal(!0);
                                        setSelected(row);
                                    }}>View Pricing</span>
                                </div>
                            </td>
                            <td>
                                <div className={style.actionWrap}>
                                    <div className={style.containerWithIcon}>
                                        <span className={style.iconCont}>{getSvg("FILE")}</span>
                                        <span className={style.text_normal_med}>CSV</span>
                                    </div>
                                    <div className={style.containerWithIcon}>
                                        <span className={style.iconCont}>{getSvg("REPORT")}</span>
                                        <span className={style.text_normal_med}>Report</span>
                                    </div>
                                    <div className={style.containerWithIcon}>
                                        <span className={style.iconCont}>{getSvg("CALENDAR")}</span>
                                        <span className={style.text_normal_med} onClick={_=> {
                                            setshowCalendar(row.id);
                                        }}>Schedule Again</span>
                                        {showCalendar === row.id && <Calendar onChange={val=> {
                                            handleCalendarChange(val, row.id)
                                        }}/>}
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )
                })
            }

        </table>
        {showModal && (
        <Modal onClose={modalClosehandler}>
            <Card data={selected}/>
        </Modal>
        )}
        </>
    )
}

export default Table;