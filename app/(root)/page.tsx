import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Siddhartha",
    lastName: "Banerjee",
    email: "siddhartha@mail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greet"
            title="Welcome"
            user={loggedIn?.firstName || "User"}
            subtext="Access and manage your account and transaction efficiently!"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrBalance={1450.56}
          />
        </header>
        Recent Transactions
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 2000.8 }, { currentBalance: 2300.78 }]}
      />
    </section>
  );
};

export default Home;
