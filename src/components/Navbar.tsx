import Link from "next/link";

export default function Navbar() {

return (
    <div className="flex w-full p-4">
        <Link href={"/login"} className="flex-1 text-center">로그인</Link>
        <Link href={"/login"} className="flex-1 text-center">글쓰기</Link>
        <Link href={"/login"} className="flex-1 text-center">todolist</Link>
        <Link href={"/login"} className="flex-1 text-center">about</Link>
        <Link href={"/login"} className="flex-1 text-center">game</Link>
    </div>
)
}