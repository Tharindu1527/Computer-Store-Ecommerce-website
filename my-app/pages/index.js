import Layout from "@/components/Layout";
import {useSession} from "next-auth/react";

export default function Home() {
    const {data: session} = useSession();
    return <Layout>
        <div className="text-blue-900 flex justify-between" >
            <h2>
                 Hello, <b>{session?.user?.name}</b>
            </h2>
            <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">{/* 300 mean actually opacity */}
                <img src={session?.user?.image} alt="" className="w-8 h-8"/>
                    <span className="px-2">
                        {session?.user?.name}{/* this function use for add name with image */}
                    </span>
            </div>
        </div>
    </Layout>
}
