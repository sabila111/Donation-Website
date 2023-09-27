import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const [data, setData] = useState([]);
  const [addedCard, setAddedCard] = useState(0);

  useEffect(() => {
    
    const storedData = localStorage.getItem('/cardsDonation.json');

    if (storedData) {
    
      setData(JSON.parse(storedData));
    }

    
    const storedAddedCard = localStorage.getItem('addedCard');

    if (storedAddedCard) {
      
      setAddedCard(parseFloat(storedAddedCard));
    }
  }, []);

  
  const calculatedValue = ((12 - addedCard) / 12) * 100;

  
  const newData = [
    { name: 'Total Donation', value: calculatedValue },
    { name: 'Your Donation', value: addedCard }
  ];

  const COLORS = ['#FF444A', '#00C49F'];

  return (
    <>
      <div>
        <div className="  justify-content-center text-center">
          <div className="">
            <ResponsiveContainer width={400} height={400} className="text-center">
              <PieChart width={400} height={400}>
                <Legend layout="vertical" verticalAlign="center" align="center" />
                <Pie
                  data={newData}
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {newData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
