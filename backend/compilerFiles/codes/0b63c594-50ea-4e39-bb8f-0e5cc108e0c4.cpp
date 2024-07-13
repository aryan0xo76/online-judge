#include <bits/stdc++.h>
using namespace std;
#define int long long
#define ll long long
#define fors(i,a,b) for(ll (i) = (a); i < (b); (i)++)
#define min3(a,b,c)((a<b)?((a<c)?a:c):((b<c)?b:c))
#define lcm(a,b) a*b*1.0/(__gcd(a,b))
#define all(x) ((x).begin(),(x).end())
#define debug(x) cout << "[" << #x << " = " << x << "]"<<endl;
int mod = 1e9 +7;
//hashkeys #1#0#2

//read kadane knapsack notes

//do both recursive and iterative dp
//for bool answer still dp default value=-1
//prefsum levels : difference prefix -> normal vector ->prefix sum

//bitmask
//equal zero one subarray using map and sum;
//st.erase(st.find(1)) for 1 instance;
// use mp.find()** sometimes as (mp[1]>0)creates key of 1;
//int idx = find(all,div)-a.begin(); isntead of *find
//2 vector store indexes - use pairs
// priorityqueue(faster than set)makepairs(pop removes highest pririty(bigg))
//multiple ans bad
//xor isflip
//cmmon elemtn bitsmaksign '&'
//prefixsuffixmex
// sieve is nlog(log(n))
//*BINARY SEARCH/LOWER BOUND APPROACH
//vector only pop_back not pop front(reverse and pop)
// DSU

// ll binExp(ll a,ll b,ll m){ //log(n)
// 	if(b==0)return 1;
// 	ll x=1;
// 	while(b){
// 		if(b&1)
// 			x=(x*a)%m;
// 		a= (a*a)%m;
// 		b>>=1;
// 	}
// 	return x%m;
// }
//sieve of eraTosthenes
//mn stack
//string hashing (either prefix hashing or 1 hash value)


void solve(){
	int n,m,k;cin>>n>>m>>k;

	for(int i=n;i>m;i--){
		cout<<i<<" ";
	}

	for(int i=1;i<=m;i++){
		cout<<i<<" ";
	}
	cout<<endl;


}


signed main(){
	int t; cin>>t; while(t--)
	solve(); 
	return 0;
}