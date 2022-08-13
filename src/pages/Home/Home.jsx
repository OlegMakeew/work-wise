import React from 'react'
import { Posts } from '@/components/Post/Posts';
import { CreateBar } from '../../components/Post/CreateBar';

export const Home = () => {
    return (
        <main>
            <div className="container">
                <div className="main-section">
                    <div className="main-section-data">
                        <div className="row">
                            <div className="main-ws-sec">
                                <CreateBar/>
                                <Posts/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};