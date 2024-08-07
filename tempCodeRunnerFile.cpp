#include <bits/stdc++.h>
using namespace std;
#define int long long
#define ll long long
#define fors(i,a,b) for(ll (i) = (a); i < (b); (i)++)
#define min3(a,b,c)((a<b)?((a<c)?a:c):((b<c)?b:c))
#define lcm(a,b) a*b*1.0/(__gcd(a,b))
#define all(x) ((x).begin(),(x).end())
#define debug(x) cout << "[" << #x << " = " << x << "]"<<endl;
// int mod = 1e9 +7;

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
//dp from end common cf

//dsu and trie template in folder

struct TRIE{
	int trie[200020][26];
	int nc;
	int hotnode[200020]; //important
	void init(){
		for(int i =0 ;i<200020;i++){
			for(int j =0;j<26;j++){
				trie[i][j]=-1;
			}
		}
		nc =0;	
	}
	void insert(const string &s){
		int curr =0;
		for(int i =0;i<s.size();i++){
			if(trie[curr][s[i]-'a']==-1){
				trie[curr][s[i]-'a']=nc;
				nc++;
			}
			curr = trie[curr][s[i]-'a'];
		}
		hotnode[curr]++;
	}
	bool check(const string &s){
		int curr =0;
		for(int i =0;i<s.size();i++){
			if(trie[curr][s[i]-'a']==-1){
				return 0;
			}
			curr = trie[curr][s[i]-'a'];
		}
		return 1;
	}
};
void solve(){
	int n;cin>>n;
	TRIE t;
	t.init();
	for(int i=0;i<n;i++){
		int x;cin>>x;
		string s;cin>>s;
		if(x==1){
			t.insert(s);
		}
		else if(x==2 ||x==3){
			cout<<t.check(s)<<endl;
		}
	}
}
signed main(){
	// int t; cin>>t; while(t--)
	solve();
	return 0;
}