import { Theme } from '../types';

const AlphaTheme:Theme = {
  name: 'alpha',
  board: {
    black: '#769656',
    white: '#EEEED2',
  },
  icons: {
    bB: ['data:image/png;base64,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'],
    bK: ['data:image/png;base64,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'],
    bN: ['data:image/png;base64,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'],
    bP: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAE1UlEQVR42u2bS2wbRRjHx5vY3oftJH47fsXxq17HJrYbh6QprZqmChENNFAhQQmkTWigtMGUqEh9cEkKQaKIh4QqFQlUcStVqYSioOaABJcieqJCHCiFnipVXHrGy8zWdW1TGuxdp7s785c+jdfr/db6+Zv5Zr5ZA0BERERERERERERERERERESkdr1V2P+v9+bnZgiYBykcCojtjm2bxk0cd9FiNv1OUdR1Sqe7bjabfjNz7NdPjg2Po88k4mECrFZDj+Z4jmV+hi+FBxn6zOMjjyUIsQoN5DOH1wJXYUXUQuCvEXJQg/nMq3XAq7KhgdzL2IIbHdkC9k3uDre0tAiNAtS3tgoH978QHt2+GU+IdlvHj3e7ZINW7Gi3/IAlvDOfnPRLAFdln3+65McOYLY3eU4ugLmM6AsvwbHvklwA9Xr9JewAOuzWP+QCWPKFWQKxW6/JCPAaVvAOzU7CLkytSMzA5UzcQlErhQMv4RWBvanEe3JFYMkXXhIEgdbpdJLhUZROQL6wnAu2t1m+kTqRLvnAT89OjIktx7INR1/p2rIvPIsJ/dmswaCvGx66ZmhgYxbrSkyn2ym23V3+q/UCDIcCVyt9YCeYOcH7i0fsRoPhSoPjYNFoNF5ZevuwNZPm8QMIM7DDZOIEqUnEjHxQwIEFtP6+R8R25+i2UYNeLxVeRSQaBOQT+e7LprQJz+20i21fLrVPjvlfrSGfud6kuBxxu+zagnd0/hWxdTlsq6BiX0NmE326nOI9wJGCRqr91o42tOqgPC7H7SbCq4Fovy0IRQrdW9UKBX3gzYPTaAvyRpPB3Q/kjflD07HukIqL1UG/Nw+nKcI6w6tKLkGfJ69KeHsnn3GwDHMWvvx4LYOrigsNrEQu/B/fHMeeRd9F09Mbn9e9u16AcEydAETlJV3dEejtdJ0n5EryuJ11j3EBf6dAyEFNPT/R02iimJ+b6cEa3tzsJAj4PHsbBRiLdE0tHi/gHYFmE3e+UYA2a/tXWMODKxQdnGY0PNdjWRrfcXBi5w4Qi3bNSJ0wZ9L81IGZPdh23++krjbaLOZVbKOwVcKzgaD8XEwrnt04FPStyrVGjkVC32IH0MRxshUNOJbBKwrdLsdPcldfvB7X5R4+pn146WTM26ySfrS7y6NZcInYnT/H0LSxaSV9ttSVNReJu54YQZNm4LBZb4EmF1JdTvstdK+n4D01oe1bByG8v6nkhuivYH0q00V+Q+QXtMoZ3jKgDYjxaOgvsM57IvGIeE916sOlY2K7cLwQpijqJnhIeyIwsdxcOPa6OPh++dkpdUEMBrzvPARo9zW/z3NCFdDGx4bFlmGMl0Hz94Dr2itus5jQdwLJRFSZ8Ph4RGxt1vY/lRJ5tWY0GtBfy9CTscqCh8aX5YtfwOUZ+71S4ZVriAy9gjK04iIwxcdmFdJl1+zSAb9HWVuipz9aYGC2FVQAr9SVjejJfmXAWzzxBhqYR1QSfWXj4+GhD949qgyIWzf3n1QTPGTwR59WTBfuTfPn1AZwY6ZHOX+R7cumCUBpAFMqBJhSDsBN/dllGma2KqPvGENXHFecY2qOUcvQdM3xf5wvnWPoe/e59z5ddS1Tc+7u+cF8ZlkR8Kb2PK3aoseLz+0CRERERERERESY6h+RAfZINhLK1wAAAABJRU5ErkJggg=='],
    bQ: ['data:image/png;base64,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'],
    bR: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAE5klEQVR42u2bTW8bRRjHvbbj3cT2eu3ETuw4Tp04bZoABoWAq9KGJG6o1KoQqIRQADsKqEigfgQORW2EFMQhl0aVIgTiSC6oQT0gtcixUkTbqBJISFA4ID5E/TLMrGeTzdYlu6T1zFPmLz2ayc7MzjO/zO68rV0uISEhISEhISEhISEhISEhIWjqjXc7LpNM9DxRDPqxIbuW6Ilp1htEO8OrdstHOyOr1vL0nrbKS5Ie9nNDrzOipRwBjDcDGFmxW76rM7xiLR93AJAY9ZkPvTCWdQQw3qQHUigtAzj+3DP8ACzOnd03wP33wKgmSZJtH4pzs/wARAh5nQDE7zu1SQ+87ADg5SavEdWJD9RnrmTb+ZP5lz579dTUxddOTX+C7cLrZ058nOqN37FbPpWM3yFlSFl6nwsn88c+deIDd8Ow1+Ox63jdYUOdmK17U1/5UkgNoMcI5pGaGvTzBzCZ6AYDEE/C+QN4INX7NxSA2Ne/eFyNrEABSH3lS3gOBgYg9ZUv4XnYlcc8wj6ykToSDl3hCt6hTNqVG8+SlUClBVOVfU1xiI+557Ma8Zk7DWUOSHiV8L2TJVUrjfh2MJOWuN3TinZF9BD/h0/joMJJTyQ+VI6MP3va7CP3yk/kegIB/8/mxlSrVVSvVfWQWK1WQzUaGtcMq9dxWCFhDVUqFT0PIteqjTi5T42YqUytel8PzXUGA/5fpo/n4O2+GrvMHrf7NmmIBy+fnKher+8KrfF/k9fr1eG5G3X/px1vboTBlUhjFEVBrRKpi655S+D3+rtjXY3G4F6xsLCAisWiyQq6FQrE3kXzOD6Pr5O4nlYobIdGnqKe3shXNPLRayRO6vDQjQ1aN2wpisxsAKF1gxfrURiuflj/Msoa4PWrX0TBApyeODLJGuArk0cnwQLEczDmAKkPMCXLvhOsAWIf8mABjgxnllgDHD2c+RwswLCmLrMGSH2Ap/Pn3iGbrMwBEh8+en8OZg/UQsE11gBDavAbsI+wpga3OHiEtyBvJDAHSH2AKfz+ucvBO/Au4FE4xHwbPxIOwV0Py7425gCpD2In5n+3I/Prj1fDvACkvsDSzNTRs7wApL7AEp7AvsELQOoLOM1y9A6cBUdvdDizxgvAkeHBNXAAI2HtmtGAxUsXUblcRhsbG7oZ8bLl711ppjyNfKXGtVJpJ6+RVio9cI/FxUvmueA1aNtYJFg3GrC5ufnQw/KHHZg3O1Df67DdnH7z5qa5F65rmso/uKdHDuphojs25nG7jS+10J9//IZarXv3ft8G6Ma+JOOxMbOPfM6aEXJlBlIP/Obtxo3r249bubxHaLWyzTyWdFKn1Y+hgf5V4iNX+mD+TT0cTPcFtJDK/depeEqDBtOpgNl35sqODs+4+P2wsumHltnRQzNcwEv1Jb6jH1RCgLcN0eNxo2Rvz7cc7Lj4ECBw1iNPxHzQgArPtfOjQ3YAJ4/n8tABTh17kenB+wR0gJLkepnlencJOsCnDg8tMYH34XtvuTralWXoABVFXj5/7m02PTDgb/8aOkB/R/tXzB5hv799CzrAgL9ji+Ugcgs6QGw/MaMX64rox4aKLCMyoSa2O+7T042/d6xNn8Qa8ablZV+TcnuUN67JdutvQ1HcBibwBtN9/P7mzKEyA6knpi1CQkJCQkJCQjb1DwnxQ/I2LRu/AAAAAElFTkSuQmCC'],
    wB: ['data:image/png;base64,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'],
    wK: ['data:image/png;base64,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'],
    wN: ['data:image/png;base64,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'],
    wP: ['data:image/png;base64,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'],
    wQ: ['data:image/png;base64,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'],
    wR: ['data:image/png;base64,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'],
  },
};

export default AlphaTheme;
