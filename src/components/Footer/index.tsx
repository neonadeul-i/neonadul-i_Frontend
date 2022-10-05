import Link from "next/link";
import * as S from "./style";

export default function Footer() {
    return (
        <S.Layer>
            <h3>Github</h3>
            <img src="/svg/Github.svg" alt="Github Logo" />
            <h3>2022 전국 SW마이스터고 연합 해커톤</h3>
            <div>
                개인정보취급방침 | 운영 정책
            </div>
        </S.Layer>
    )
}