import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS, TESTIMONIALS } from '../data/products';
import CustomerReviews from '../components/CustomerReviews';
import { 
  Star, ShoppingBag, Truck, ShieldCheck, Check, Sparkles, 
  ArrowRight, FileText, ChevronRight, Share2, Heart, Award, 
  CheckCircle2, Clock, MapPin, Zap
} from 'lucide-react';

export default function ProductDetailPage({ onAddToCart, onOpenReportModal }) {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Find product by id
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];

  // State
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);
  const [selectedFlavor, setSelectedFlavor] = useState(product.flavors ? product.flavors[0] : null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.image);
  const [pincode, setPincode] = useState('');
  const [pincodeChecked, setPincodeChecked] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  // Update image when product changes
  React.useEffect(() => {
    setActiveImage(product.image);
    setSelectedSize(product.sizes ? product.sizes[0] : null);
    setSelectedFlavor(product.flavors ? product.flavors[0] : null);
    setQuantity(1);
    setPincodeChecked(false);
  }, [productId, product]);

  const currentPrice = selectedSize ? selectedSize.price : product.price;
  const currentOriginal = selectedSize ? selectedSize.original : product.originalPrice;
  const currentSavings = currentOriginal - currentPrice;

  const handleAdd = () => {
    onAddToCart(product.id, quantity, selectedSize);
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
    }, 1500);
  };

  const handleBuyNow = () => {
    onAddToCart(product.id, quantity, selectedSize);
    navigate('/shop');
  };

  const handlePincodeCheck = (e) => {
    e.preventDefault();
    if (pincode.length === 6) {
      setPincodeChecked(true);
    }
  };

  const otherProducts = PRODUCTS.filter((p) => p.id !== product.id);

  return (
    <div className="bg-[#F9FBF4] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="text-xs text-[#8A9388] mb-6 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-black">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/shop" className="hover:text-black">Shop</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-black">
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#101F18] font-bold">{product.name}</span>
        </nav>

        {/* Main Product Layout */}
        <div className="bg-white p-4 sm:p-8 lg:p-10 rounded-2xl border border-[#DDE8C2] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            
            {/* Left Column: Visual Gallery */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Main Showcase Image */}
              <div className="relative bg-[#EDF5DC] texture-botanical p-8 rounded-2xl border border-[#DDE8C2] flex items-center justify-center min-h-[400px] sm:min-h-[480px] overflow-hidden group">
                
                {/* Floating Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                  <span className="bg-[#86C33A] text-white text-xs font-bold rounded-full px-3 py-1 shadow-xs">
                    {product.discount} OFF
                  </span>
                  <span className="bg-[#86C33A] text-white text-xs font-bold rounded-full px-3 py-1 flex items-center gap-1 shadow-xs">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                    {product.proteinPerServing}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                  <div className="w-6 h-6 border-2 border-emerald-600 flex items-center justify-center p-0.5 rounded-xl bg-white" title="100% Vegetarian">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-600"></div>
                  </div>
                </div>

                {/* Primary Image */}
                <img
                  src={activeImage}
                  alt={product.name}
                  className="max-h-[360px] sm:max-h-[420px] w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-2xl"
                />

                {/* Reflection effect */}
                <div className="absolute -bottom-4 w-3/4 h-8 bg-black/10 rounded-full blur-md pointer-events-none"></div>
              </div>

              {/* Thumbnail Bar */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex items-center gap-3">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`w-20 h-20 p-2 bg-[#EDF5DC] border transition-all overflow-hidden ${
                        activeImage === img
                          ? 'border-[#86C33A] scale-105'
                          : 'border-[#DDE8C2] hover:border-[#86C33A]/60 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}

              {/* Regulatory Assurance Row */}
              <div className="p-3.5 sm:p-4 bg-[#F9FBF4] rounded-2xl border border-[#DDE8C2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4 text-xs text-[#5A5A52]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#86C33A] flex-shrink-0" />
                  <span className="leading-snug"><strong>NABL Lab Tested:</strong> Batch {product.labTested?.batchNo || 'GLS-2026'}</span>
                </div>
                <button
                  onClick={onOpenReportModal}
                  className="text-[#86C33A] hover:text-[#6AA326] font-bold hover:underline inline-flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">View Lab Certificate →</span>
                </button>
              </div>

            </div>

            {/* Right Column: Pricing, Options, CTAs */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <span className="inline-flex items-center rounded-full border border-[#86C33A]/35 bg-white text-[9.5px] sm:text-[11px] font-bold uppercase tracking-wider sm:tracking-[0.18em] text-[#86C33A] px-2.5 sm:px-3 py-1">
                  {product.category} • Gomzi Lifesciences
                </span>

                <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#101F18] mt-3 tracking-tight">
                  {product.name}
                </h1>

                <p className="text-sm sm:text-base font-semibold text-[#86C33A] mt-1">
                  {product.tagline}
                </p>

                {/* Rating & Review Counter */}
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center text-[#FFB800]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                    ))}
                  </div>
                  <span className="text-sm font-extrabold text-[#101F18]">
                    {product.rating}
                  </span>
                  <span className="text-xs text-[#8A9388]">
                    ({product.reviewsCount} Verified Buyer Reviews)
                  </span>
                </div>
              </div>

              {/* Price Banner */}
              <div className="p-3.5 sm:p-4 bg-[#EDF5DC] rounded-2xl border border-[#DDE8C2]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="font-display text-2xl sm:text-4xl font-semibold text-[#101F18]">
                      ₹{currentPrice}
                    </span>
                    <span className="text-sm sm:text-base text-[#8A9388] line-through">
                      ₹{currentOriginal}
                    </span>
                    <span className="text-xs font-bold text-[#3F6116] bg-[#EFF6DD] border border-[#86C33A]/40 rounded-full px-2.5 py-0.5 whitespace-nowrap inline-flex items-center">
                      Save ₹{currentSavings} ({product.discount})
                    </span>
                  </div>
                  <span className="text-[11px] text-[#8A9388] mt-1 sm:mt-1.5 block leading-normal">
                    Inclusive of all statutory taxes • Free shipping on orders above ₹499
                  </span>
                </div>
              </div>

              {/* Flavor Selector */}
              {product.flavors && product.flavors.length > 0 && (
                <div>
                  <label className="text-xs font-bold text-[#5A5A52] uppercase tracking-wide block mb-2">
                    Flavour / Variety: <strong className="text-black">{selectedFlavor}</strong>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.flavors.map((flavor) => (
                      <button
                        key={flavor}
                        onClick={() => setSelectedFlavor(flavor)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                          selectedFlavor === flavor
                            ? 'border-[#86C33A] bg-[#EDF5DC] text-[#86C33A]'
                            : 'border-[#DDE8C2] text-[#5A5A52] hover:border-[#86C33A]/50 bg-white'
                        }`}
                      >
                        {flavor}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Pack Size Variants */}
              {product.sizes && (
                <div>
                  <label className="text-xs font-bold text-[#5A5A52] uppercase tracking-wide block mb-2">
                    Pack Size / Quantity: <strong className="text-black">{selectedSize?.label}</strong>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {product.sizes.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedSize(s)}
                        className={`p-3 text-left border transition-all relative ${
                          selectedSize?.label === s.label
                            ? 'border-[#86C33A] bg-[#EDF5DC]'
                            : 'border-[#DDE8C2] bg-white hover:border-[#86C33A]/50'
                        }`}
                      >
                        {s.bestValue && (
                          <span className="absolute -top-2 right-2 bg-[#86C33A] text-white text-[9px] font-bold rounded-full px-2 py-0.5 uppercase shadow-xs">
                            Best Value
                          </span>
                        )}
                        <div className="text-xs font-bold text-[#3A3A34]">{s.label}</div>
                        <div className="font-display text-sm font-semibold text-[#101F18] mt-1">₹{s.price}</div>
                        <div className="text-[10px] text-[#8A9388]">{s.servings}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector & Action CTAs */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 sm:gap-4">
                  {/* Quantity */}
                  <div className="flex items-center rounded-xl sm:rounded-2xl border border-[#DDE8C2] px-2.5 sm:px-3 py-2 sm:py-2.5 bg-white flex-shrink-0">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-[#8A9388] hover:text-black font-extrabold text-sm sm:text-base px-1.5 sm:px-2"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="font-bold text-xs sm:text-sm w-6 sm:w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-[#8A9388] hover:text-black font-extrabold text-sm sm:text-base px-1.5 sm:px-2"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={handleAdd}
                    className="flex-1 bg-[#86C33A] hover:bg-[#6AA326] text-white py-3 sm:py-3.5 px-3 sm:px-6 rounded-xl font-bold text-xs sm:text-base transition-all flex items-center justify-center gap-1.5 sm:gap-2 transform hover:-translate-y-0.5 shadow-sm whitespace-nowrap min-w-0"
                  >
                    {addedToast ? (
                      <>
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                        <span className="truncate">Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                        <span className="truncate">Add to Cart • ₹{currentPrice * quantity}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Value Bullet Points */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-[#5A5A52]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#86C33A]" />
                  <span>100% Clean Formulation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#86C33A]" />
                  <span>Zero Cane Sugar / No Fillers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#86C33A]" />
                  <span>Free Return Replacement Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#86C33A]" />
                  <span>FSSAI Licensed & GMP Certified</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Detailed Sections Stacked Vertically */}
        <div className="mt-14 space-y-10">

          {/* Section 1: Product Description & Benefits */}
          <div className="bg-white p-4 sm:p-8 lg:p-10 rounded-2xl border border-[#DDE8C2] shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#DDE8C2]">
              <div className="w-10 h-10 rounded-xl bg-[#EDF5DC] flex items-center justify-center text-[#86C33A]">
                <Sparkles className="w-5 h-5 text-[#86C33A]" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#86C33A]">Overview</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#101F18]">
                  About {product.name} & Key Health Benefits
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-[#5A5A52] text-sm sm:text-base leading-relaxed">
                {product.longDesc || product.shortDesc}
              </p>

              {product.benefits && (
                <div className="pt-2">
                  <h4 className="font-display text-base font-semibold text-[#101F18] mb-4">
                    Key Health Benefits:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.benefits.map((b, i) => (
                      <div key={i} className="p-5 bg-[#F9FBF4] rounded-2xl border border-[#DDE8C2] space-y-2 hover:border-[#86C33A] transition-colors">
                        <div className="font-bold text-sm text-[#86C33A] flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#6AA326] flex-shrink-0" />
                          <span>{b.title}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#5A5A52] leading-relaxed">{b.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Section 2: Nutritional Facts */}
          <div className="bg-white p-4 sm:p-8 lg:p-10 rounded-2xl border border-[#DDE8C2] shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#DDE8C2]">
              <div className="w-10 h-10 rounded-xl bg-[#EDF5DC] flex items-center justify-center text-[#86C33A]">
                <Award className="w-5 h-5 text-[#86C33A]" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#86C33A]">Nutritional Profile</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#101F18]">
                  Nutritional Facts & Analytical Breakdown
                </h3>
              </div>
            </div>

            <p className="text-xs text-[#8A9388] mb-6">
              Tested and verified by Assure Analytical Laboratories LLP. Every batch is calibrated against strict NABL accredited protocols.
            </p>

            <div className="max-w-2xl rounded-2xl border border-[#DDE8C2] overflow-hidden">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#86C33A] text-white">
                  <tr>
                    <th className="py-2.5 sm:py-3.5 px-3 sm:px-5 uppercase text-[10px] sm:text-[11px] font-bold text-white tracking-wider">
                      Nutrient
                    </th>
                    <th className="py-2.5 sm:py-3.5 px-3 sm:px-5 uppercase text-[10px] sm:text-[11px] font-bold text-right text-white tracking-wider whitespace-nowrap">
                      Per Serving
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DDE8C2] bg-white">
                  {product.nutrition?.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-[#F9FBF4]' : 'bg-white'}>
                      <td className="py-2.5 sm:py-3.5 px-3 sm:px-5 font-semibold text-[#3A3A34] text-xs sm:text-sm leading-snug">
                        {item.label}
                      </td>
                      <td className="py-2.5 sm:py-3.5 px-3 sm:px-5 font-bold text-right text-[#101F18] text-xs sm:text-sm whitespace-nowrap">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: Ingredients & Sourcing */}
          <div className="bg-white p-4 sm:p-8 lg:p-10 rounded-2xl border border-[#DDE8C2] shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#DDE8C2]">
              <div className="w-10 h-10 rounded-xl bg-[#EDF5DC] flex items-center justify-center text-[#86C33A]">
                <ShieldCheck className="w-5 h-5 text-[#86C33A]" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#86C33A]">Transparency</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#101F18]">
                  100% Transparent Ingredients & Ethical Sourcing
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-xs text-[#8A9388] mb-4">
                  Zero fillers, zero artificial sweeteners, zero hidden proprietary blends. We believe in 100% label honesty.
                </p>
                <div className="p-4 sm:p-5 bg-[#F9FBF4] rounded-2xl border border-[#DDE8C2] text-xs sm:text-sm font-medium text-[#3A3A34] leading-relaxed">
                  {product.ingredients}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-white rounded-2xl border border-[#DDE8C2] shadow-xs hover:border-[#86C33A] transition-colors">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#86C33A]" />
                    <strong className="text-sm font-bold text-[#101F18]">No Added Sugar</strong>
                  </div>
                  <span className="text-xs text-[#5A5A52] leading-relaxed block">Naturally sweet stevia leaf extract only. Zero glycemic spike.</span>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-[#DDE8C2] shadow-xs hover:border-[#86C33A] transition-colors">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#86C33A]" />
                    <strong className="text-sm font-bold text-[#101F18]">Zero Preservatives</strong>
                  </div>
                  <span className="text-xs text-[#5A5A52] leading-relaxed block">Naturally sun-dried whole spices and slow-roasted grains.</span>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-[#DDE8C2] shadow-xs hover:border-[#86C33A] transition-colors">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#86C33A]" />
                    <strong className="text-sm font-bold text-[#101F18]">Non-GMO & Pure</strong>
                  </div>
                  <span className="text-xs text-[#5A5A52] leading-relaxed block">Strict NABL laboratory verified purity across all batches.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: How To Prepare / Consume */}
          <div className="bg-white p-4 sm:p-8 lg:p-10 rounded-2xl border border-[#DDE8C2] shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#DDE8C2]">
              <div className="w-10 h-10 rounded-xl bg-[#EDF5DC] flex items-center justify-center text-[#86C33A]">
                <Clock className="w-5 h-5 text-[#86C33A]" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#86C33A]">Preparation Guide</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#101F18]">
                  How to Prepare / Consume
                </h3>
              </div>
            </div>

            <p className="text-xs text-[#8A9388] mb-6">
              Simple step-by-step instructions for the perfect daily brew or dish.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {product.howToUse?.map((step) => (
                <div key={step.step} className="p-4 sm:p-6 bg-[#F9FBF4] rounded-2xl border border-[#DDE8C2] relative flex flex-col justify-between hover:border-[#86C33A] transition-colors">
                  <div>
                    <div className="w-10 h-10 bg-[#86C33A] text-white font-bold flex items-center justify-center text-lg mb-4 rounded-xl shadow-xs">
                      {step.step}
                    </div>
                    <h4 className="font-display text-base font-semibold text-[#101F18] mb-1.5">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-[#5A5A52] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Third-Party Lab Certificate */}
          <div className="bg-white p-4 sm:p-8 lg:p-10 rounded-2xl border border-[#DDE8C2] shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#DDE8C2]">
              <div className="w-10 h-10 rounded-xl bg-[#EDF5DC] flex items-center justify-center text-[#86C33A]">
                <FileText className="w-5 h-5 text-[#86C33A]" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#86C33A]">Quality Verification</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#101F18]">
                  Third-Party Laboratory Certificate & Authenticity
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-6 bg-[#EDF5DC] rounded-2xl border border-[#DDE8C2]">
                <div>
                  <span className="bg-[#EFF6DD] border border-[#86C33A]/40 text-[#3F6116] text-xs font-bold rounded-full px-2.5 py-0.5 uppercase">
                    Verified Pass
                  </span>
                  <h3 className="font-display text-xl font-semibold text-[#101F18] mt-2">
                    Batch Certificate: {product.labTested?.reportNo}
                  </h3>
                  <p className="text-xs text-[#5A5A52] mt-0.5">
                    Tested by: {product.labTested?.lab}
                  </p>
                </div>

                <button
                  onClick={onOpenReportModal}
                  className="bg-[#86C33A] hover:bg-[#6AA326] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-white" />
                  <span>Open Certificate Modal</span>
                </button>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-[#3A3A34]">Tested Quality Parameters:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                  {product.labTested?.testedFor.map((t, idx) => (
                    <div key={idx} className="p-3.5 bg-[#FFFFFF] rounded-2xl border border-[#DDE8C2] flex items-center gap-2.5 hover:border-[#86C33A] transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#86C33A] flex-shrink-0" />
                      <span className="text-[#3A3A34] font-medium">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Customer Reviews & Testimonials */}
        <div className="mt-12 sm:mt-16">
          <CustomerReviews />
        </div>

        {/* You May Also Like / Other Products */}
        <div className="mt-12 sm:mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-4 mb-6 sm:mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#86C33A]">
                Complete Your Daily Routine
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#101F18] mt-1">
                You May Also Like
              </h2>
            </div>
            <Link 
              to="/shop" 
              className="text-xs sm:text-sm font-bold text-[#86C33A] hover:underline whitespace-nowrap self-start sm:self-auto inline-flex items-center gap-1 group"
            >
              <span>View All Products</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherProducts.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-2xl border border-[#DDE8C2] shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full bg-[#EDF5DC] texture-botanical flex items-center justify-center p-3 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-40 w-auto object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-[#6AA326] uppercase">{item.category}</span>
                  <h3 className="text-base font-bold text-[#101F18] mt-0.5">{item.name}</h3>
                  <div className="text-xs font-semibold text-[#86C33A] mt-1">{item.proteinPerServing}</div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#DDE8C2] flex items-center justify-between">
                  <span className="font-display text-lg font-semibold text-[#101F18]">₹{item.price}</span>
                  <Link
                    to={`/product/${item.id}`}
                    className="bg-[#86C33A] hover:bg-[#6AA326] text-white text-xs font-bold px-3 py-2 rounded-xl transition-colors shadow-xs"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
