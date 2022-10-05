import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { API } from "../../lib/API";

export default function Login() {

    const router = useRouter();
    const inputRef = useRef<any>([]);
    const [id, setId] = useState<any>();
    const [pw, setPw] = useState<any>();

    const Sumbit = async () => {
        const reg_id = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/
        const reg_pw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@!?.])[A-Za-z\d$@!?.]{8,16}$/

        if (!reg_id.test(id)) { inputRef.current[0].focus(); }
        else if (!reg_pw.test(pw)) { inputRef.current[1].focus(); }

        else {
            try {
                const { data } = await API.post('/auth/login', {
                    id: id,
                    password: pw,
                })
                console.log(data);
                localStorage.setItem('AccessToken', data.access_token);
                router.push('/');
            } catch (e: any) {
                console.log(e);
            }
        }
    }

    return (
        <>
            <h1>ID</h1>
            <input ref={(ref) => inputRef.current[0] = ref} type="text" onChange={(e: any) => setId(e.target.value)} />
            <h1>Password</h1>
            <input ref={(ref) => inputRef.current[1] = ref} type="password" onChange={(e: any) => setPw(e.target.value)} />
            <button onClick={Sumbit}>로그인</button>
        </>
    )
}