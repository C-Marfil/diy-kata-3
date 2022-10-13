const reachDestination = (distance, speed) => {
  const hours = distance / speed;
  return (Math.round(hours * 2) / 2).toFixed(1);
};
module.exports = reachDestination;
