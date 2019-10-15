 <h1 id="task">Task</h1>
<p>In this Kata your task is to recreate a vending machine. You will have to make a class called  VendingMachine  with at least one method called  vend. On creation of a new instance of  VendingMachine  the  items  Array and  Initial vending machine money  is passed. The  vend  method should take two arguments  1. Selection code of the item (not case sensitive)  and  2. Amount of money the user inserts into the machine.</p>
<p>An example call of the vend method:</p>
<pre><code class="lang-javascript"><span class="hljs-selector-tag">machine</span><span class="hljs-selector-class">.vend</span>("<span class="hljs-selector-tag">A01</span>", 0<span class="hljs-selector-class">.90</span>)
</code></pre>
<p>where the selected item is  <code>A01</code>  and the money given to the machine is  <code>90p</code>
An example of the items Array is below</p>
<pre><code class="lang-javascript">var items = [{<span class="hljs-string">name:</span><span class="hljs-string">"Smarties"</span>, <span class="hljs-string">code:</span><span class="hljs-string">"A01"</span>, <span class="hljs-string">quantity:</span><span class="hljs-number">10</span>, <span class="hljs-string">price:</span><span class="hljs-number">0.60</span>},
             {<span class="hljs-string">name:</span><span class="hljs-string">"Twix"</span>, <span class="hljs-string">code:</span><span class="hljs-string">"A02"</span>, <span class="hljs-string">quantity:</span><span class="hljs-number">5</span>, <span class="hljs-string">price:</span><span class="hljs-number">0.60</span>},
             {<span class="hljs-string">name:</span><span class="hljs-string">"Dairy Milk"</span>, <span class="hljs-string">code:</span><span class="hljs-string">"A03"</span>, <span class="hljs-string">quantity:</span><span class="hljs-number">1</span>, <span class="hljs-string">price:</span><span class="hljs-number">0.65</span>},
             {<span class="hljs-string">name:</span><span class="hljs-string">"Snickers"</span>, <span class="hljs-string">code:</span><span class="hljs-string">"A04"</span>, <span class="hljs-string">quantity:</span><span class="hljs-number">1</span>, <span class="hljs-string">price:</span><span class="hljs-number">0.25</span>},
             {<span class="hljs-string">name:</span><span class="hljs-string">"Donuts"</span>, <span class="hljs-string">code:</span><span class="hljs-string">"A05"</span>, <span class="hljs-string">quantity:</span><span class="hljs-number">0</span>, <span class="hljs-string">price:</span><span class="hljs-number">0.50</span>},
             {<span class="hljs-string">name:</span><span class="hljs-string">"Three Musketeers"</span>, <span class="hljs-string">code:</span><span class="hljs-string">"A06"</span>, <span class="hljs-string">quantity:</span><span class="hljs-number">2</span>, <span class="hljs-string">price:</span><span class="hljs-number">0.35</span>}];
</code></pre>
<h1 id="rules">Rules</h1>
<ol>
<li><p>If the money given to the machine is less than the item cost return &quot;Not enough money!&quot;  </p>
</li>
<li><p>If the quantity is 0 for an item return &quot;Item Name: Out of stock!&quot;. Where &quot;Item Name&quot; is the name of the item selected.  </p>
</li>
<li><p>If an item is correctly selected return &quot;Vending Item Name with 9.40 change.&quot;. Where &quot;Item Name&quot; is the name of the item and change if any given.  </p>
</li>
<li><p>If an item is correctly selected and there is no change needed then return &quot;Vending Item Name&quot;. Where &quot;Item Name&quot; is the name of the item.  </p>
</li>
<li><p>If an invalid item is selected return &quot;Invalid selection! : Money in vending machine = 11.20&quot;. Where 11.20 is the machines money float.  </p>
</li>
<li><p>If a selection is successful then the quantity should be updated.  </p>
</li>
<li><p>The vending machine never runs out of money for simplicity however you will need to keep track of the amount of money in the machine at anytime  </p>
</li>
<li><p>Change is always given to 2 decimal places ie 7.00</p>
</li>
</ol>
<p>Please use the JS window to implement your solution.</p>
 
