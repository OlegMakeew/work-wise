import React from "react";
import { CreateBar, Posts, UserProfileSidebar } from "components";
import { About, Jobs, Suggestions } from "components/Widgets";

export const Home = () => {
  return (
    <main>
      <div className="container">
        <div className="main-section">
          <div className="main-section-data">
            <div className="row">
              <UserProfileSidebar />
              <div className="col-lg-6 col-md-8 no-pd">
                <div className="main-ws-sec">
                  <CreateBar />
                  <Posts />
                </div>
              </div>
              <div className="col-lg-3 pd-right-none no-pd">
                <div className="right-sidebar">
                  <About />
                  <Jobs title="Top Jobs" items={[]} />
                  <Jobs title="Most Viewed This Week" items={[]} />
                  <Suggestions />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
