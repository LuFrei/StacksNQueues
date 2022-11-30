//  Approach:
//  Scan the grid from left to right, top to bottom.
//  Mark cells that we processed as "visited".
//  When a land is found, check it's cardinal positions for land. In order: E > S > W > N
//  Store progress in a stack,
//    In this porcess, if a land is found we step into and go throug hte cardinal directions until we find the first lands.
//    We do this until there is no land.
//    (need to take note of where we came from)

//  Issues:
//  What does Queue or BFS have to do with this?
//  The ideal algo would be to use a stack to search in zone, and when you run out of room go back one step and check other paths

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
  this.islandCount = 0;
  this.visitedCoords = [];
  this.grid = grid;
};

