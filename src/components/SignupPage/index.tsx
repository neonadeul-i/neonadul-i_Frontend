import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { API } from "../../lib/API";

export default function SignupPage() {

    const router = useRouter();
    const inputRef = useRef<any>([]);
    const [value, setValue] = useState<any>({
        Name: "",
        ID: "",
        PW: "",
        PWcheck: "",
        Phone: "",
        Address: "",
        Type: "",
    });
    const { Name, ID, PW, PWcheck, Phone, Address, Type } = value;
    const array = ["Name", "ID", "PW", "PW check", "Phone", "Address"];

    const Sumbit = async () => {
        const reg_id = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@!?.])[A-Za-z\d$@!?.]{8,16}$/
        const reg_pw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@!?.])[A-Za-z\d$@!?.]{8,16}$/

        if (!(Name !== '')) { inputRef.current[0].focus(); }
        else if (!reg_id.test(ID)) { inputRef.current[1].focus(); }
        else if (!reg_pw.test(PW)) { inputRef.current[2].focus(); }
        else if (!(PWcheck === PW)) { inputRef.current[3].focus(); }
        else if (!(Phone !== '')) { inputRef.current[4].focus(); }
        else if (!(Address !== '')) { inputRef.current[5].focus(); }

        else {
            try {
                const res = await API.post('/auth', {
                    id: ID,
                    password: PW,
                    type: Type,
                    name: Name,
                    phone: Phone,
                    address: Address,
                })
                console.log(res);
                router.replace('/login');
            } catch (e: any) {
                console.log(e);
            }
        }
    }

    return (
        <>
            {array.map((item, key) => {

                return (
                    <>
                        <h1>{item}</h1>
                        <input name={item.replace(/ /g, "")} ref={(ref) => inputRef.current[key] = ref}
                            type={item === "PW" || item === "PW check" ? "password" : "text"}
                            onChange={(e: any) => setValue({ ...value, [e.target.name.replace(/ /g, "")]: e.target.value })} />
                    </>)
            })}

            <h1>Type</h1>
            <select onChange={(e: any) => setValue({ ...value, Type: e.target.value })}>
                <option value=""></option>
                <option value="노인">노인</option>
                <option value="도우미">도우미</option>
            </select>
            <button onClick={Sumbit}>로그인</button>
        </>
    )
}