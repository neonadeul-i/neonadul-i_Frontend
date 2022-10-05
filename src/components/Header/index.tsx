import Link from "next/link";
import Logo from "../Logo";
import * as S from "./style";

export default function Header() {
    return (
        <S.Layer>
            <Logo />
            <S.Nav>
                <Link href="/">홈</Link>
                <Link href="/">AI스피커</Link>
                <Link href="/">일정</Link>
                <Link href="/">도우미글쓰기</Link>
                <Link href="/">MY페이지</Link>
            </S.Nav>
            <S.Profile>
                <img src="" alt="profile" />
            </S.Profile>
        </S.Layer>
    )
}